import { Injectable, Query } from '@nestjs/common';
import { decode, JwtPayload } from 'jsonwebtoken';
import qs from 'qs';
import axios from 'axios';
@Injectable()
export class AuthService {
  /**
   * Payload 디코딩
   * @param token
   */
  public getJwtPayload(token: string): null | JwtPayload {
    const decoded = decode(token, { json: true });
    return decoded;
  }

  async kakaoTokenRequest(code: string) {
    const url = `https://kauth.kakao.com/oauth/token`;
    const config = {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8',
      },
    };
    const data = qs.stringify({
      grant_type: 'authorization_code',
      client_id: 'd4693039c10654360d002b60c46fe4b7',
      // client_secret: 'zm3SZcAJVenj3cGdW61JXnlCQVjuEXzQ',
      redirect_uri: 'http://localhost:3000/api/auth/callback/kakao',
      code: code,
    });
    const res = await axios.post(url, data, config);
    return res;
  }

  async kakaoUserInfoRequest(accessToken: string) {
    const url = `https://kapi.kakao.com/v2/user/me`;
    const config = {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8',
        Authorization: `Bearer ${accessToken}`,
      },
    };
    const data = qs.stringify({
      property_keys: ['kakao_account.email', 'kakao_account.profile'],
    });
    const res = await axios.post(url, data, config);
    return res;
  }
}
