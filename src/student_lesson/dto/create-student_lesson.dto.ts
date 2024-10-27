import { IsBoolean, IsNumber, IsString } from "class-validator";

export class CreateStudentLessonDto {
    @IsBoolean()
    is_thene: boolean;

    @IsString()
    reason: string;

    @IsBoolean()
    be_paid: boolean;

    @IsNumber()
    studentId: number;

    @IsNumber()
    lessonId: number;
}
