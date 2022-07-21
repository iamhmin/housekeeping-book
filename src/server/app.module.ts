import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { RenderModule } from 'nest-next';
import Next from 'next';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RecordsModule } from './records/records.module';
import { NODE_ENV } from 'src/shared/constants/env';
import { AuthModule } from './api/auth/auth.module';
import { LoginModule } from "./login/login.module";

@Module({
  imports: [
    TypeOrmModule.forRoot(),
    RecordsModule,
    AuthModule,
    LoginModule,
    RenderModule.forRootAsync(
      Next({ dev: NODE_ENV === 'development' }),
      /* null means that nest-next 
          should look for pages in root dir */
      { viewsDir: null },
    ),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
