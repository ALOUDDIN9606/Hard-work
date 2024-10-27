-- AlterTable
ALTER TABLE "group" ALTER COLUMN "is_active" DROP NOT NULL,
ALTER COLUMN "is_active" SET DEFAULT false;
