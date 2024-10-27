-- CreateTable
CREATE TABLE "Lesson" (
    "id" SERIAL NOT NULL,
    "lesson_theme" TEXT NOT NULL,
    "lesson_number" INTEGER NOT NULL,
    "lesson_date" TIMESTAMP(3) NOT NULL,
    "groupId" INTEGER NOT NULL,

    CONSTRAINT "Lesson_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "student_lesson" (
    "id" SERIAL NOT NULL,
    "is_thene" BOOLEAN NOT NULL,
    "reason" TEXT NOT NULL,
    "be_paid" BOOLEAN NOT NULL,
    "studentId" INTEGER NOT NULL,
    "lessonId" INTEGER NOT NULL,

    CONSTRAINT "student_lesson_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Lesson" ADD CONSTRAINT "Lesson_groupId_fkey" FOREIGN KEY ("groupId") REFERENCES "group"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "student_lesson" ADD CONSTRAINT "student_lesson_studentId_fkey" FOREIGN KEY ("studentId") REFERENCES "student"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "student_lesson" ADD CONSTRAINT "student_lesson_lessonId_fkey" FOREIGN KEY ("lessonId") REFERENCES "Lesson"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
