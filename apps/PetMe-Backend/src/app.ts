import express, { Express, Request, Response, NextFunction } from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import session from 'express-session';
import passport from 'passport';
import { Strategy as Oauth2Strategy } from 'passport-google-oauth2';
import prisma from './db';
import router from './routes';

class App {
  private app: Express;
  private prismaInstance: typeof prisma;

  constructor(prismaInstance: typeof prisma) {
    this.app = express();
    this.prismaInstance = prismaInstance;
    this.config();

    this.app.get('/', (_req, res) => {
      res.send({ ok: true });
    });


    this.routes();
  }

  private config(): void {
    this.app.use(cors());
    this.app.use(bodyParser.json({ limit: '10mb' }));
    this.app.use(bodyParser.urlencoded({ limit: '10mb', extended: true }));
    this.app.use(session({
      secret: process.env.SESSION_SECRET || 'your-session-secret',
      resave: false,
      saveUninitialized: true,
    }));
    this.app.use(passport.initialize());
    this.app.use(passport.session());
    passport.serializeUser<any, any>((user, done) => done(null, user));
    passport.deserializeUser<any, any>((user, done) => done(null, user));

    this.setupGoogleAuthStrategy();
  }

  private setupGoogleAuthStrategy(): void {
    passport.use(new Oauth2Strategy(
      {
        clientID: process.env.CLIENT_ID || '',
        clientSecret: process.env.CLIENT_SECRET || '',
        callbackURL: "/auth/google/callback",
        scope: ["email", "profile"],
      },
      async (accessToken, refreshToken, profile, done) => {
        try {
          let user = await this.prismaInstance.user.findUnique({ where: { google_id: profile.id } });
          if (!user) {
            user = await this.prismaInstance.user.create({
              data: {
                google_id: profile.id,
                first_name: profile.displayName,
                email: profile.emails[0].value,
              }
            });
          }
          return done(null, user);
        } catch (error) {
          return done(error, null);
        }
      }
    ));
  }

  private routes(): void {
    this.app.use(router);

    this.app.get('/auth/google', passport.authenticate('google', { scope: ['email', 'profile'] }));

    this.app.get('/auth/google/callback',
      passport.authenticate('google', { failureRedirect: '/login' }),
      (req: Request, res: Response) => {
        res.redirect('http://localhost:5173/home');
      });

    this.app.get('/login/success', (req: Request, res: Response) => {
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

export default App;
