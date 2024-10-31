import { Injectable } from '@nestjs/common';
import { CreateBoardDto } from './dto/create-board.dto';
import { UpdateBoardDto } from './dto/update-board.dto';
import {InjectRepository} from "@nestjs/typeorm";
import {Repository} from "typeorm";
import {Board} from "./entities/board.entity";

@Injectable()
export class BoardService {
  constructor(
      @InjectRepository(Board)
      private readonly productRepository: Repository<Board>
  ) {
  }
  create(createBoardDto: CreateBoardDto) {
    return this.productRepository.save(createBoardDto);
  }

  findAll() {
    return this.productRepository.find();
  }

  findOne(id: number) {
    return this.productRepository.findOneBy({id});
  }

  async update(id: number, updateBoardDto: UpdateBoardDto) {
    await this.productRepository.update(id, updateBoardDto);
    return this.productRepository.findOneBy({id});
  }

  async remove(id: number) {
    await this.productRepository.delete(id);
    return this.productRepository.findOneBy({id});
  }
}
