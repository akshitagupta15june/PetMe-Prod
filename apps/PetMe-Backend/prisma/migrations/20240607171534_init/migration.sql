/*
  Warnings:

  - The primary key for the `Donate_Pets` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `Pet_Breed` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `Pet_Color` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `Pet_Type` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `Pets` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `Support_User` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the `Donate_User` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Volunteer_User` table. If the table is not empty, all the data it contains will be lost.

*/
-- CreateEnum
CREATE TYPE "AUTH_PROVIDER" AS ENUM ('GOOGLE');

-- DropForeignKey
ALTER TABLE "Donate_Pets" DROP CONSTRAINT "Donate_Pets_donate_user_id_fkey";

-- DropForeignKey
ALTER TABLE "Donate_Pets" DROP CONSTRAINT "Donate_Pets_pet_id_fkey";

-- DropForeignKey
ALTER TABLE "Pets" DROP CONSTRAINT "Pets_breed_id_fkey";

-- DropForeignKey
ALTER TABLE "Pets" DROP CONSTRAINT "Pets_color_id_fkey";

-- DropForeignKey
ALTER TABLE "Pets" DROP CONSTRAINT "Pets_type_id_fkey";

-- AlterTable
ALTER TABLE "Donate_Pets" DROP CONSTRAINT "Donate_Pets_pkey",
ALTER COLUMN "donate_user_id" SET DATA TYPE TEXT,
ALTER COLUMN "pet_id" SET DATA TYPE TEXT,
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ADD CONSTRAINT "Donate_Pets_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "Donate_Pets_id_seq";

-- AlterTable
ALTER TABLE "Pet_Breed" DROP CONSTRAINT "Pet_Breed_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ADD CONSTRAINT "Pet_Breed_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "Pet_Breed_id_seq";

-- AlterTable
ALTER TABLE "Pet_Color" DROP CONSTRAINT "Pet_Color_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ADD CONSTRAINT "Pet_Color_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "Pet_Color_id_seq";

-- AlterTable
ALTER TABLE "Pet_Type" DROP CONSTRAINT "Pet_Type_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ADD CONSTRAINT "Pet_Type_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "Pet_Type_id_seq";

-- AlterTable
ALTER TABLE "Pets" DROP CONSTRAINT "Pets_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ALTER COLUMN "color_id" SET DATA TYPE TEXT,
ALTER COLUMN "breed_id" SET DATA TYPE TEXT,
ALTER COLUMN "type_id" SET DATA TYPE TEXT,
ADD CONSTRAINT "Pets_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "Pets_id_seq";

-- AlterTable
ALTER TABLE "Support_User" DROP CONSTRAINT "Support_User_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ADD CONSTRAINT "Support_User_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "Support_User_id_seq";

-- DropTable
DROP TABLE "Donate_User";

-- DropTable
DROP TABLE "Volunteer_User";

-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL,
    "first_name" TEXT NOT NULL,
    "last_name" TEXT,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "address" TEXT NOT NULL,
    "google_id" TEXT,
    "city" TEXT NOT NULL,
    "auth_provider" "AUTH_PROVIDER",
    "state" TEXT NOT NULL,
    "country" TEXT NOT NULL,
    "zip_code" TEXT NOT NULL,
    "phone_number" TEXT NOT NULL,
    "role" TEXT[],
    "verfied_flag" BOOLEAN NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Blog" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "content" TEXT NOT NULL,
    "published" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "edited" TIMESTAMP(3),
    "authorId" TEXT NOT NULL,

    CONSTRAINT "Blog_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- AddForeignKey
ALTER TABLE "Donate_Pets" ADD CONSTRAINT "Donate_Pets_donate_user_id_fkey" FOREIGN KEY ("donate_user_id") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Donate_Pets" ADD CONSTRAINT "Donate_Pets_pet_id_fkey" FOREIGN KEY ("pet_id") REFERENCES "Pets"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Pets" ADD CONSTRAINT "Pets_breed_id_fkey" FOREIGN KEY ("breed_id") REFERENCES "Pet_Breed"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Pets" ADD CONSTRAINT "Pets_color_id_fkey" FOREIGN KEY ("color_id") REFERENCES "Pet_Color"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Pets" ADD CONSTRAINT "Pets_type_id_fkey" FOREIGN KEY ("type_id") REFERENCES "Pet_Type"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Blog" ADD CONSTRAINT "Blog_authorId_fkey" FOREIGN KEY ("authorId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
