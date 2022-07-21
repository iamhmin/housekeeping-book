import { FC } from 'react';

import { Typography } from 'antd';
import { Record } from "../../../src/server/records/record.entity";
import { GetServerSideProps, NextPage } from "next";

const { Title } = Typography;
interface Props {
  query: {
    id_token: string;
  };
}

const Login: NextPage<Props> = ({ query }) => {
  return (
    <div>
      <Title mark level={3}>
        {query.id_token}방문을 환영합니다
      </Title>
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async (res) => {
  const server_prop = JSON.parse(JSON.stringify(res.query));

  const props: Props = {
    query: {
      id_token: server_prop.id_token as any,
    },
  };
  return { props };
};

export default Login;
