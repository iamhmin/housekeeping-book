import { PageHeader, Button } from 'antd';
import { NextPage } from 'next';
import * as React from 'react';
import { useRouter } from 'next/router';
import axios from 'axios';

interface Props {
  sessionInfo: any;
}

const HeaderComponent: NextPage<Props> = ({
  sessionInfo = {
    isLogin: false,
    info: {
      uid: 0,
      nickname: '',
      email: '',
    },
  },
}) => {
  const isLogin = sessionInfo.isLogin || false;
  const uid = sessionInfo.info.uid || 0;
  const nickname = sessionInfo.info.nickname || '-';
  const email = sessionInfo.info.email || '';

  const router = useRouter();

  const kakaoLogin = (e) => {
    location.href =
      'https://kauth.kakao.com/oauth/authorize?client_id=d4693039c10654360d002b60c46fe4b7&redirect_uri=http://localhost:3000/api/auth/callback/kakao&response_type=code';
  };
  return (
    <>
      <div style={{ backgroundColor: 'dodgerblue' }}>
        <PageHeader
          className="site-page-header"
          title="가계부"
          subTitle="nest-next practice by hamin"
          extra={[
            <>
              <div
                className="nav--login"
                style={{ display: isLogin ? 'none' : 'block' }}
              >
                <Button key="1" onClick={kakaoLogin}>
                  카카오로그인
                </Button>
              </div>
              <div
                className="nav--login"
                style={{ display: isLogin ? 'block' : 'none' }}
              ></div>
            </>,
          ]}
        />
      </div>
    </>
  );
};

export default HeaderComponent;
