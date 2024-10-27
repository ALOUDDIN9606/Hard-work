import { IsDate, IsNumber, IsString } from "class-validator";

export class CreateStudentDto {
    @IsString()
    first_name: string;

    @IsString()
    last_name: string;

    @IsString()
    phone_number: string;

    @IsDate()
    birth_day: Date;

    @IsString()
    male: string;

    @IsNumber()
    lidId: number;
}
