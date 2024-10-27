/*
  Warnings:

  - Changed the type of `birth_day` on the `student` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "student" DROP COLUMN "birth_day",
ADD COLUMN     "birth_day" TIMESTAMP(3) NOT NULL;
