/*
  Warnings:

  - Added the required column `stageId` to the `group` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "group" ADD COLUMN     "stageId" INTEGER NOT NULL;

-- CreateTable
CREATE TABLE "stage" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "stage_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "payment" (
    "id" SERIAL NOT NULL,
    "payment_last_date" TIMESTAMP(3) NOT NULL,
    "payment_date" TIMESTAMP(3) NOT NULL,
    "price" DECIMAL(65,30) NOT NULL,
    "is_paid" BOOLEAN NOT NULL,
    "total_attent" INTEGER NOT NULL,
    "studentId" INTEGER NOT NULL,

    CONSTRAINT "payment_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "stage_name_key" ON "stage"("name");

-- AddForeignKey
ALTER TABLE "group" ADD CONSTRAINT "group_stageId_fkey" FOREIGN KEY ("stageId") REFERENCES "stage"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
