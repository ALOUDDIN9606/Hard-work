import { IsDate, IsNumber, IsString } from "class-validator";

export class CreateLessonDto {
    @IsString()
    lesson_theme: string;

    @IsNumber()
    lesson_number: number;

    @IsDate()
    lesson_date: Date;

    @IsNumber()
    groupId: number;
}
