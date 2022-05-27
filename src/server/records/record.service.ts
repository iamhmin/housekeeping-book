import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Record } from './record.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(Record)
    private recordRepository: Repository<Record>,
  ) {}

  findAll(): Promise<Record[]> {
    return this.recordRepository.find();
  }

  async remove(no: number): Promise<void> {
    await this.recordRepository.delete(no);
  }
}