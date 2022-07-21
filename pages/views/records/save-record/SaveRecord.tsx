import React from 'react';
import { Breadcrumb, Timeline } from 'antd';
import { FC } from 'react';
import { ClockCircleOutlined } from '@ant-design/icons';
import { GetServerSideProps, NextPage } from 'next';
import { Record } from '../../../../src/server/records/record.entity';
import RegisterForm from '../../common/components/RegisterForm';

interface Props {
  query: {
    records: Record[];
  };
}

const SaveRecord: NextPage<Props> = ({ query }) => {
  return (
    <>
      <div>
        <Breadcrumb style={{ margin: '16px 0' }}>
          <Breadcrumb.Item>save-record</Breadcrumb.Item>
        </Breadcrumb>
      </div>
      <RegisterForm />
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async (res) => {
  const server_prop = JSON.parse(JSON.stringify(res.query));

  const props: Props = {
    query: {
      records: server_prop.records as any,
    },
  };
  return { props };
};

export default SaveRecord;
