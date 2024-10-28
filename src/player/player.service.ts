import { Injectable } from '@nestjs/common';
import { CreatePlayerDto } from './dto/create-player.dto';
import { UpdatePlayerDto } from './dto/update-player.dto';
import {InjectRepository} from "@nestjs/typeorm";
import {Player} from "./entities/player.entity";
import {Repository} from "typeorm";

@Injectable()
export class PlayerService {

  constructor(
      @InjectRepository(Player)
      private readonly playerRepository: Repository<Player>
  ) {
  }
  create(createPlayerDto: CreatePlayerDto) {
    return this.playerRepository.save(createPlayerDto);
  }

  findAll() {
    return this.playerRepository.find();
  }

  findOne(id: number) {
    return this.playerRepository.findOneBy({id});
  }

  async update(id: number, updatePlayerDto: UpdatePlayerDto) {
    await this.playerRepository.update(id, updatePlayerDto)
    return this.playerRepository.findOneBy({id});
  }

  async remove(id: number) {
    await this.playerRepository.delete(id);
    return id;
  }
}
