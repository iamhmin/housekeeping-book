import {
  Body,
  Controller,
  Delete,
  Get,
} from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('api/auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Get('/:auth')
  home() {
    return {};
  }
}
