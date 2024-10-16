
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { MembersService } from '../members/members.service';
import { LoginMemberDto } from './dto/login-member.dto';
import * as bcrypt from 'bcryptjs';

@Injectable()
export class AuthService {
    constructor(
        private readonly membersService: MembersService,
        private readonly jwtService: JwtService,
    ) {}

    async validateMember(loginMemberDto: LoginMemberDto): Promise<any> {
        const { username, password } = loginMemberDto;
        const member = await this.membersService.findByUsername(username);

        if (!member) {
            throw new UnauthorizedException('Invalid credentials');
        }

        const passwordValid = await bcrypt.compare(password, member.password);

        if (!passwordValid) {
            throw new UnauthorizedException('Invalid credentials');
        }

        const payload = { username: member.username, sub: member.id };
        const token = this.jwtService.sign(payload); // 토큰 발행

        return { access_token: token };
    }
}

