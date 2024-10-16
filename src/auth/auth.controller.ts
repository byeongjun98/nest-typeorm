import {Controller, Post, Body, Get, UseGuards} from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginMemberDto } from './dto/login-member.dto';
import { JwtAuthGuard } from './jwt-auth.guard';

@Controller('auth')
export class AuthController {
    constructor(private readonly authService: AuthService) {}

    @Post('login')
    async login(@Body() loginMemberDto: LoginMemberDto) {
        return this.authService.validateMember(loginMemberDto);
    }
}

@Controller('protected')
export class ProtectedController {
    @Get()
    @UseGuards(JwtAuthGuard)
    getProtectedData() {
        return { message: 'This is protected data' };
    }
}

