import {
  Body,
  Request,
  Controller,
  Delete,
  Get,
  Query,
  Render,
  Res,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import axios from 'axios';
import _ from 'lodash';
import qs from 'qs';

@Controller('api/auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Get('/callback/kakao')
  @Render('views/main/Login')
  async kakaoLogin(@Query() query, @Res() res, @Request() req) {
    const response = await this.authService.kakaoTokenRequest(query.code);
    const userInfoRes = await this.authService.kakaoUserInfoRequest(
      response.data.access_token,
    );
    const info = _.cloneDeep(req.session.info);
    req.session.info = {
      ...req.session.info,
      uid: 0,
      email: '',
      nickname: '',
    };
    console.log(userInfoRes.data);
    return {
      id_token: JSON.stringify(userInfoRes.data),
    };
  }
}
