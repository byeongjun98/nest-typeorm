import {IsString} from "class-validator";

export class CreateBoardDto {

    @IsString()
    board_type: string;

    @IsString()
    title: string;

    @IsString()
    description: string;


}
