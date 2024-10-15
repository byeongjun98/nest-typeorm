import {IsNotEmpty, IsString, IsEmail, IsPhoneNumber, IsDateString, IsOptional} from 'class-validator';

export class CreateMemberDto {
    @IsNotEmpty()
    @IsString()
    username: string;

    @IsNotEmpty()
    @IsString()
    name: string;

    @IsNotEmpty()
    @IsPhoneNumber(null)
    phone: string;

    @IsNotEmpty()
    @IsDateString()
    birth_date: string;
    @IsNotEmpty()
    @IsString()
    password: string;

    @IsOptional()
    @IsEmail()
    email?: string;

    @IsOptional()
    @IsString()
    address?: string;

    @IsOptional()
    @IsString()
    status?: string;
}
