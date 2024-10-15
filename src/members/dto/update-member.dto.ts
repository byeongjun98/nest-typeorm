import { IsOptional, IsString, IsEmail, IsPhoneNumber, IsDateString } from 'class-validator';

export class UpdateMemberDto {
    @IsOptional()
    @IsString()
    username?: string;

    @IsOptional()
    @IsString()
    name?: string;

    @IsOptional()
    @IsPhoneNumber(null)
    phone?: string;

    @IsOptional()
    @IsDateString()
    birth_date?: string;

    @IsOptional()
    @IsString()
    password?: string;

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
