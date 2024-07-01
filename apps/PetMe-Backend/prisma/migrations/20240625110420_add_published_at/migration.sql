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

-- CreateTable
CREATE TABLE "News" (
    "id" TEXT NOT NULL,
    "user" TEXT NOT NULL,
    "imageSrc" TEXT NOT NULL,
    "tags" TEXT[],
    "title" TEXT NOT NULL,
    "content" TEXT NOT NULL,
    "publishedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "News_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "SOS_Pets" ADD CONSTRAINT "SOS_Pets_report_user_id_fkey" FOREIGN KEY ("report_user_id") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SOS_Pets" ADD CONSTRAINT "SOS_Pets_type_id_fkey" FOREIGN KEY ("type_id") REFERENCES "Pet_Type"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
