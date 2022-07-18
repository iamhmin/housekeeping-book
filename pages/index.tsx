import { FC } from 'react';

import { Typography } from 'antd';

const { Title } = Typography;

const Home: FC = () => {
  return (
    <div>
      <Title mark level={3}>
        방문을 환영합니다
      </Title>
    </div>
  );
};

export default Home;
