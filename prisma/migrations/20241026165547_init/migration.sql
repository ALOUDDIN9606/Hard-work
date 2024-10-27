-- CreateTable
CREATE TABLE "student" (
    "id" SERIAL NOT NULL,
    "first_name" TEXT NOT NULL,
    "last_name" TEXT NOT NULL,
    "phone_number" TEXT NOT NULL,
    "birth_day" TIMESTAMP(3) NOT NULL,
    "male" TEXT NOT NULL,
    "lidId" INTEGER NOT NULL,

    CONSTRAINT "student_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "student_phone_number_key" ON "student"("phone_number");

-- AddForeignKey
ALTER TABLE "payment" ADD CONSTRAINT "payment_studentId_fkey" FOREIGN KEY ("studentId") REFERENCES "student"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "student" ADD CONSTRAINT "student_lidId_fkey" FOREIGN KEY ("lidId") REFERENCES "lid"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
