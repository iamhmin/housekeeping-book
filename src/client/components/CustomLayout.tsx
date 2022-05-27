import HeaderComponent from './HeaderComponent';
import { Layout, Menu, Breadcrumb } from 'antd';

const { Content, Sider, Footer } = Layout;

const items = [
    { label: 'index', key: '1' }, // remember to pass the key prop
    {
      label: 'income/expense',
      key: 'sub1',
      children: [{ label: 'daily', key: '2' },
                 { label: 'weekly', key: '3' },
                 { label: 'monthly', key: '4' },
                 { label: 'yearly', key: '5' }],
    },
  ];

export default function CustomLayout({ children }) {
    return (
        <Layout style={{ minHeight: '100vh' }}>
        <Sider>
          <div className="App-logo" />
          <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline" items={items}/>
        </Sider>
        <Layout>
          <HeaderComponent />
          <Content style={{ margin: '0 16px' }}>
            <Breadcrumb style={{ margin: '16px 0' }}>
              <Breadcrumb.Item>income/expense</Breadcrumb.Item>
              <Breadcrumb.Item>weekly</Breadcrumb.Item>
            </Breadcrumb>
            <main>{children}</main>
          </Content>
          <Footer style={{ textAlign: 'center' }}>
            nest-next housekeeping book by hamin
          </Footer>
        </Layout>
      </Layout>
    )
}