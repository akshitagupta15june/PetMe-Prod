-- AlterTable
ALTER TABLE "User" ADD COLUMN     "token" TEXT NOT NULL DEFAULT '';

-- CreateTable
CREATE TABLE "Otp" (
    "otp" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP
);

-- CreateIndex
CREATE UNIQUE INDEX "Otp_otp_key" ON "Otp"("otp");
