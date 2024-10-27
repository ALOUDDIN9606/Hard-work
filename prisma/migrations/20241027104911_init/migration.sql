-- CreateTable
CREATE TABLE "student_group" (
    "id" SERIAL NOT NULL,
    "studentId" INTEGER NOT NULL,
    "groupId" INTEGER NOT NULL,

    CONSTRAINT "student_group_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "student_group" ADD CONSTRAINT "student_group_studentId_fkey" FOREIGN KEY ("studentId") REFERENCES "student"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "student_group" ADD CONSTRAINT "student_group_groupId_fkey" FOREIGN KEY ("groupId") REFERENCES "group"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
