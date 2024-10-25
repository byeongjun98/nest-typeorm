import {Body, Controller, Post, UseGuards, Request} from '@nestjs/common';
import { AuthService } from './auth.service';
import {RegisterDto} from "./dto/register.dto";
import {AuthGuard} from "@nestjs/passport";
import {LocalAuthGuard} from "./guard/local.guard";

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('register')
  async register(@Body() dto: RegisterDto){
    return this.authService.register(dto.username, dto.password);
  }

  @UseGuards(LocalAuthGuard)
  @Post('login')
  async login(@Request() req){
    return this.authService.login(req.user);
  }
}
