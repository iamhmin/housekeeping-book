import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Render,
} from '@nestjs/common';
import { CreateRecordDto } from './dto/create-record.dto';
import { Record } from './record.entity';
import { RecordsService } from './records.service';

@Controller('records')
export class RecordsController {
  constructor(private readonly recordsService: RecordsService) {}

  @Post()
  create(@Body() createRecordDto: CreateRecordDto): Promise<Record> {
    return this.recordsService.create(createRecordDto);
  }

  @Get('/save-record')
  @Render('views/records/save-record/SaveRecord')
  async saveRecord() {
    return { records: await this.recordsService.findAll() };
  }

  @Get('/daily')
  @Render('views/records/daily/Daily')
  async findAll() {
    return { records: await this.recordsService.findAll() };
  }

  @Get('/weekly')
  @Render('views/records/weekly/Weekly')
  findAllWeekly(): Promise<Record[]> {
    return this.recordsService.findAll();
  }

  @Get('/monthly-yearly')
  @Render('views/records/monthly-yearly/MonthlyYearly')
  findAllMonthly(): Promise<Record[]> {
    return this.recordsService.findAll();
  }
  // @Delete(':no')
  // remove(@Param('no') no: string): Promise<void> {
  //   return this.recordsService.remove(no);
  // }
}
