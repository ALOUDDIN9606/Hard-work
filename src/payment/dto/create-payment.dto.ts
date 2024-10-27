import { IsBoolean, IsDate, IsNumber, IsString } from "class-validator"

export class CreatePaymentDto {
    @IsString()
    payment_last_date: string

    @IsString()
    payment_date: string

    @IsNumber()
    price: number

    @IsBoolean()
    is_paid: boolean

    @IsNumber()
    total_attent: number

    @IsNumber()
    studentId: number;
}
