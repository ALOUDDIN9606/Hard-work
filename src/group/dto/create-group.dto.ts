import { IsNotEmpty, IsNumber, IsString } from "class-validator";

export class CreateGroupDto {
  id: number;
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsNotEmpty()
  start_time: string;

  @IsString()
  continious: string;

  @IsString()
  week_day: string;

  @IsString()
  room_number: string;

  @IsNumber()
  room_floor: number;

  @IsNumber()
  lessons_quant: number;

  @IsString()
  staff: string;

  @IsNumber()
  stageId: number;
}
