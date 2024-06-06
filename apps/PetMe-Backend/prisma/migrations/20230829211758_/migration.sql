-- CreateTable
CREATE TABLE "Donate_User" (
    "id" SERIAL NOT NULL,
    "first_name" TEXT NOT NULL,
    "last_name" TEXT,
    "email" TEXT NOT NULL,
    "address" TEXT NOT NULL,
    "city" TEXT NOT NULL,
    "state" TEXT NOT NULL,
    "country" TEXT NOT NULL,
    "zip_code" TEXT NOT NULL,
    "phone_number" TEXT NOT NULL,

    CONSTRAINT "Donate_User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Volunteer_User" (
    "id" SERIAL NOT NULL,
    "first_name" TEXT NOT NULL,
    "last_name" TEXT,
    "email" TEXT NOT NULL,
    "address" TEXT NOT NULL,
    "city" TEXT NOT NULL,
    "state" TEXT NOT NULL,
    "country" TEXT NOT NULL,
    "zip_code" TEXT NOT NULL,
    "phone_number" TEXT NOT NULL,

    CONSTRAINT "Volunteer_User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Donate_Pets" (
    "donate_user_id" INTEGER NOT NULL,
    "pet_id" INTEGER NOT NULL,
    "id" SERIAL NOT NULL,

    CONSTRAINT "Donate_Pets_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Pets" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "color_id" INTEGER NOT NULL,
    "breed_id" INTEGER NOT NULL,
    "type_id" INTEGER NOT NULL,

    CONSTRAINT "Pets_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Pet_Type" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "Pet_Type_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Pet_Breed" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "Pet_Breed_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Pet_Color" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "Pet_Color_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Support_User" (
    "id" SERIAL NOT NULL,
    "first_name" TEXT NOT NULL,
    "last_name" TEXT,
    "email" TEXT NOT NULL,
    "address" TEXT NOT NULL,
    "city" TEXT NOT NULL,
    "state" TEXT NOT NULL,
    "country" TEXT NOT NULL,
    "zip_code" TEXT NOT NULL,
    "phone_number" TEXT NOT NULL,

    CONSTRAINT "Support_User_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Donate_User_email_key" ON "Donate_User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Volunteer_User_email_key" ON "Volunteer_User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Support_User_email_key" ON "Support_User"("email");

-- AddForeignKey
ALTER TABLE "Donate_Pets" ADD CONSTRAINT "Donate_Pets_donate_user_id_fkey" FOREIGN KEY ("donate_user_id") REFERENCES "Donate_User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Donate_Pets" ADD CONSTRAINT "Donate_Pets_pet_id_fkey" FOREIGN KEY ("pet_id") REFERENCES "Pets"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Pets" ADD CONSTRAINT "Pets_breed_id_fkey" FOREIGN KEY ("breed_id") REFERENCES "Pet_Breed"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Pets" ADD CONSTRAINT "Pets_color_id_fkey" FOREIGN KEY ("color_id") REFERENCES "Pet_Color"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Pets" ADD CONSTRAINT "Pets_type_id_fkey" FOREIGN KEY ("type_id") REFERENCES "Pet_Type"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
