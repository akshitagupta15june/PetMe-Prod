/*
  Warnings:

  - Added the required column `adoption_fee` to the `Pets` table without a default value. This is not possible if the table is not empty.
  - Added the required column `age` to the `Pets` table without a default value. This is not possible if the table is not empty.
  - Added the required column `gender` to the `Pets` table without a default value. This is not possible if the table is not empty.
  - Added the required column `location` to the `Pets` table without a default value. This is not possible if the table is not empty.
  - Added the required column `size` to the `Pets` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Pets" ADD COLUMN     "adoption_fee" TEXT NOT NULL,
ADD COLUMN     "age" TEXT NOT NULL,
ADD COLUMN     "gender" TEXT NOT NULL,
ADD COLUMN     "location" TEXT NOT NULL,
ADD COLUMN     "size" TEXT NOT NULL;
