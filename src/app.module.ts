import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { Record } from './entities/record.entity';
import { RecordsModule } from './records/records.module';
import { RenderModule } from 'nest-next';
import Next from 'next';

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
    RenderModule.forRootAsync(
      Next({ dev: true }),
      /* null means that nest-next 
          should look for pages in root dir */
      { viewsDir: null },
    ),
    RecordsModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
