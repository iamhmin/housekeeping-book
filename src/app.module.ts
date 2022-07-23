import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { Record } from './entities/record.entity';
import { RecordsModule } from './records/records.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      port: 3306,
      username: 'root',
      password: 'qwer',
      database: 'housekeeping_book',
      entities: [User, Record],
      synchronize: true,
    }),
    RecordsModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
