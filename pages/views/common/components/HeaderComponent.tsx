import { PageHeader, Button } from 'antd';
import { NextPage } from 'next';
import * as React from 'react';
import { useRouter } from 'next/router';
import { signIn, signOut, useSession } from 'next-auth/react';

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
  const { data: session, status } = useSession();
  const isLogin = sessionInfo.isLogin || false;
  const uid = sessionInfo.info.uid || 0;
  const nickname = sessionInfo.info.nickname || '-';
  const email = sessionInfo.info.email || '';

  const router = useRouter();

  return (
    <>
      <div>
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
                <Button key="1" onClick={() => signIn()}>
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
