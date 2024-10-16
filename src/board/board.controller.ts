import { Controller, Get, Post, Body, Param, Delete, Put, UseGuards, Request } from '@nestjs/common';
import { BoardService } from './board.service';
import { CreateBoardDto } from 'src/board/dto/create-board.dto';
import { UpdateBoardDto } from 'src/board/dto/update-board.dto';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';

@Controller('board')
export class BoardController {
    constructor(private readonly boardService: BoardService) {}

    @UseGuards(JwtAuthGuard)
    @Post()
    create(@Body() createBoardDto: CreateBoardDto, @Request() req) {
        return this.boardService.create(createBoardDto, req.user.userId);
    }

    @Get()
    findAll() {
        return this.boardService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id: string) {
        return this.boardService.findOne(id);
    }

    @UseGuards(JwtAuthGuard)
    @Put(':id')
    update(@Param('id') id: string, @Body() updateBoardDto: UpdateBoardDto) {
        return this.boardService.update(id, updateBoardDto);
    }

    @UseGuards(JwtAuthGuard)
    @Delete(':id')
    remove(@Param('id') id: string) {
        return this.boardService.remove(id);
    }
}
