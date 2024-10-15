import { IsString, IsEmail, IsPhoneNumber, IsDateString } from 'class-validator';

export class MemberDto {
    @IsString()
    readonly id: string;

    @IsString()
    readonly username: string;

    @IsString()
    readonly name: string;

    @IsPhoneNumber(null)
    readonly phone: string;
    @IsDateString()
    readonly birth_date: string;

    @IsString()
    readonly password: string;

    @IsDateString()
    readonly created_at: string;

    @IsEmail()
    readonly email?: string;

    @IsString()
    readonly address?: string;

    @IsString()
    readonly status?: string;
}
