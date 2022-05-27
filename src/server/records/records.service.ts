import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Record } from './record.entity';
import { CreateRecordDto } from './dto/create-record.dto';

@Injectable()
export class RecordsService {
  constructor(
    @InjectRepository(Record)
    private recordsRepository: Repository<Record>,
  ) {}

  create(createRecordDto: CreateRecordDto): Promise<Record> {
    const record = new Record();
    record.remark = createRecordDto.remark;
    record.amount = createRecordDto.amount;
    record.type = createRecordDto.type;
    record.createdDate = new Date();

    return this.recordsRepository.save(record);
  }
  async findAll(): Promise<Record[]> {
    return this.recordsRepository.find();
  }

  async remove(no: string): Promise<void> {
    await this.recordsRepository.delete(no);
  }
}