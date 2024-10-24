import {BadRequestException, Injectable, Module} from '@nestjs/common';
import {InjectRepository} from "@nestjs/typeorm";
import {User} from "../user/entities/user.entity";
import {Repository} from "typeorm";
import * as bcrypt from 'bcrypt'


@Injectable()
export class AuthService {
    constructor(
        @InjectRepository(User)
        private readonly userRepository: Repository<User>,
    ) {}

    async register(username: string, password: string): Promise<User>{
        const existingUser = await this.userRepository.findOneBy({username});

        if(existingUser){
            throw new BadRequestException(('이미 가입한 아이디입니다'))
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        return this.userRepository.save({
            username,
            password: hashedPassword
        });


    }
}
