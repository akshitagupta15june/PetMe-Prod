/*
  Warnings:

  - Added the required column `pet_img` to the `Pets` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Pets" ADD COLUMN     "pet_img" TEXT NOT NULL;

-- CreateTable
CREATE TABLE "SOS_Pets" (
    "id" TEXT NOT NULL,
    "report_user_id" TEXT NOT NULL,
    "landmark" TEXT NOT NULL,
    "type_id" TEXT NOT NULL,
    "Pet_Condition" TEXT NOT NULL,
    "Additional_Desc" TEXT NOT NULL,

    CONSTRAINT "SOS_Pets_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "SOS_Pets" ADD CONSTRAINT "SOS_Pets_report_user_id_fkey" FOREIGN KEY ("report_user_id") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SOS_Pets" ADD CONSTRAINT "SOS_Pets_type_id_fkey" FOREIGN KEY ("type_id") REFERENCES "Pet_Type"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
