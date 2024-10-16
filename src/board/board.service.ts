import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Board } from './entities/board.entity';
import { CreateBoardDto } from 'src/board/dto/create-board.dto';
import { UpdateBoardDto } from 'src/board/dto/update-board.dto';

@Injectable()
export class BoardService {
    constructor(
        @InjectRepository(Board)
        private readonly boardRepository: Repository<Board>,
    ) {}

    create(createBoardDto: CreateBoardDto, authorId: string): Promise<Board> {
        const board = this.boardRepository.create({ ...createBoardDto, authorId });
        return this.boardRepository.save(board);
    }

    findAll(): Promise<Board[]> {
        return this.boardRepository.find();
    }

    findOne(id: string): Promise<Board> {
        return this.boardRepository.findOneBy({ id });
    }

    update(id: string, updateBoardDto: UpdateBoardDto): Promise<void> {
        return this.boardRepository.update(id, updateBoardDto).then(() => {});
    }

    remove(id: string): Promise<void> {
        return this.boardRepository.delete(id).then(() => {});
    }
}
