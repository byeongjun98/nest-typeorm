import { Controller, Get, Post, Put, Delete, Body, Param, Query } from '@nestjs/common';
import { MembersService } from './members.service';
import { CreateMemberDto } from './dto/create-member.dto';
import { UpdateMemberDto } from './dto/update-member.dto';
import { MemberDto } from './dto/member.dto';

@Controller('members')
export class MembersController {
    constructor(private readonly membersService: MembersService) {}

    @Post()
    async create(@Body() createMemberDto: CreateMemberDto): Promise<MemberDto> {
        return this.membersService.create(createMemberDto);
    }

    @Get()
    async findAll(): Promise<MemberDto[]> {
        return this.membersService.findAll();
    }

    @Get('memberGet')
    async findOne(@Query('id') id: string): Promise<MemberDto> {
        return this.membersService.findOne(id);
    }

    @Put(':id')
    async update(@Param('id') id: string, @Body() updateMemberDto: UpdateMemberDto): Promise<MemberDto> {
        return this.membersService.update(id, updateMemberDto);
    }

    @Delete(':id')
    async remove(@Param('id') id: string): Promise<void> {
        return this.membersService.remove(id);
    }
}
