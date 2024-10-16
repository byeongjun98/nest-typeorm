import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Member } from './entities/member.entity';
import { CreateMemberDto } from './dto/create-member.dto';
import { UpdateMemberDto } from './dto/update-member.dto';
import { MemberDto } from './dto/member.dto';
import { plainToInstance } from 'class-transformer';
import * as bcrypt from 'bcryptjs';

@Injectable()
export class MembersService {
    constructor(
        @InjectRepository(Member)
        private readonly memberRepository: Repository<Member>,
    ) {}

    async create(createMemberDto: CreateMemberDto): Promise<MemberDto> {
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(createMemberDto.password, salt);


        const member = this.memberRepository.create({
            ...createMemberDto,
            password: hashedPassword,
        });

        await this.memberRepository.save(member);
        return plainToInstance(MemberDto, member);
    }

    async findAll(): Promise<MemberDto[]> {
        const members = await this.memberRepository.find();
        return members.map(member => plainToInstance(MemberDto, member));
    }

    async findOne(id: string): Promise<MemberDto> {
        const member = await this.memberRepository.findOneBy({ id });
        if (!member) {
            throw new NotFoundException(`Member with id ${id} not found`);
        }
        return plainToInstance(MemberDto, member);
    }

    async update(id: string, updateMemberDto: UpdateMemberDto): Promise<MemberDto> {
        const member = await this.findOne(id);
        Object.assign(member, updateMemberDto);
        await this.memberRepository.save(member);
        return plainToInstance(MemberDto, member);
    }

    async remove(id: string): Promise<void> {
        if (!id) {
            throw new Error('ID is required to delete a member');
        }
        const result = await this.memberRepository.delete(id);
        if (result.affected === 0) {
            throw new Error(`Member with ID ${id} not found or could not be deleted`);
        }
    }
    async findByUsername(username: string): Promise<Member | undefined> {
        return this.memberRepository.findOne({where: {username}});
    }
}
