import { FC } from 'react';
import { Table } from 'antd'

const Home: FC = () => {
    const dataSource = [{
        key: '1',
        type: '+',
        amount: 50000,
        description: '용돈 받았음'
    }, {
        key: '2',
        type: '-',
        amount: 30000,
        description: '도서 <죄와 벌> 구매'
    }, {
        key: '2',
        type: '-',
        amount: 10000,
        description: '햄버거'
    }, {
        key: '2',
        type: '-',
        amount: 30000,
        description: '가방 '
    }];
    const columns = [{
        title: 'Type',
        dataIndex: 'type',
        key: 'type',
    }, {
        title: 'Amount',
        dataIndex: 'amount',
        key: 'amount',
    }, {
        title: 'Description',
        dataIndex: 'description',
        key: 'description',
    }];
    return (
        <div>
            <Table dataSource={dataSource} columns={columns} />
        </div>
    )
};

export default Home;