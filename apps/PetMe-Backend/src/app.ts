import express, { Express, Request, Response, NextFunction } from "express";
import cors from "cors";
import bodyParser from "body-parser";
import session from "express-session";
import passport from "passport";
import { Strategy as Oauth2Strategy, Profile } from "passport-google-oauth2";
import { PrismaClient } from '@prisma/client';
import prisma from "./db"; // Assuming "./db" is exporting an instance of PrismaClient
import router from "./routes";

interface User {
  id: string;
}

type UserID = User['id'];

export default class App {
  private app: Express;
  private prismaInstance = prisma;

  constructor() {
    this.app = express();

    this.config();

    this.app.get("/", (_req: Request, res: Response) => {
      res.send({ ok: true });
    });

    this.routes();
  }

  private config(): void {
    this.app.use(cors());
    this.app.use(bodyParser.json({ limit: "10mb" }));
    this.app.use(bodyParser.urlencoded({ limit: "10mb", extended: true }));
    this.app.use(
      session({
        secret: process.env.SESSION_SECRET || "your-session-secret",
        resave: false,
        saveUninitialized: true,
      })
    );
    this.app.use(passport.initialize());
    this.app.use(passport.session());

    // Define the types explicitly for serializeUser and deserializeUser methods so that TypeScript can understand the expected types and should not throw type errors for the done function.
    passport.serializeUser<User, UserID>((user: User, done: (err: Error | null, id?: UserID) => void) => {
      done(null, user.id);
    });

    passport.deserializeUser<UserID, User>(async (id: UserID, done: (err: Error | null, user?: User | null) => void) => {
      try {
        const user = await this.prismaInstance.user.findUnique({ where: { id } });
        if (user) {
          done(null, user);
        } else {
          done(new Error('User not found'), null);
        }
      } catch (error) {
        done(error as Error, null);
      }
    });

    this.setupGoogleAuthStrategy();
  }

  private setupGoogleAuthStrategy(): void {
    passport.use(
      new Oauth2Strategy(
        {
          clientID: process.env.CLIENT_ID || "",
          clientSecret: process.env.CLIENT_SECRET || "",
          callbackURL: "/auth/google/callback",
          scope: ["email", "profile"],
        },
        async (accessToken: string, refreshToken: string, profile: Profile, done: (err: Error | null, user?: User | false) => void) => {
          try {
            const email: string = profile.emails?.[0].value || "";
            const Id: string = profile.id;
            const first_name: string = profile.displayName || "";
            let user = await this.prismaInstance.user.findUnique({
              where: { email: email },
            });
            if (!user) {
              user = await this.prismaInstance.user.create({
                data: {
                  google_id: Id,
                  first_name: first_name,
                  email: email,
                },
              });
            }
            return done(null, user);
          } catch (error) {
            return done(error as Error, false);
          }
        },
      )
    );
  }

  private routes(): void {
    this.app.use(router);

    this.app.get(
      "/auth/google",
      passport.authenticate("google", { scope: ["email", "profile"] })
    );

    this.app.get(
      "/auth/google/callback",
      passport.authenticate("google", { failureRedirect: "/login" }),
      (req: Request, res: Response) => {
        res.redirect("http://localhost:5173/home");
      }
    );

    this.app.get("/login/success", (req: Request, res: Response) => {
      if (req.user) {
        res.json({
          msg: "user login",
          user: req.user,
        });
      } else {
        res.json({
          msg: "user not login",
        });
      }
    });
  }

  public start(PORT: string | number): void {
    this.app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
  }
}

const appInstance = new App();
export { appInstance };
