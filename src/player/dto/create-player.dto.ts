import {Column} from "typeorm";
import {IsDate, IsNumber, IsString} from "class-validator";

export class CreatePlayerDto {
    @IsString()
    name: string;

    @IsNumber()
    age: number;

    @IsDate()
    birth: Date;

    @IsNumber()
    height: number;

    @IsNumber()
    weight: number;

    @IsString()
    position: string;

}
