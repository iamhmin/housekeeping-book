import React, { Component } from 'react';
import { PageHeader, Button } from 'antd';

class HeaderComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {

        }
    }
   
    render() {
        return (
            <div>
                <PageHeader
                    className="site-page-header"
                    title="가계부"
                    subTitle="nest-next practice by hamin"
                    extra={[
                        <Button key="2">Login</Button>,
                        <Button key="1" type="primary">
                          Join
                        </Button>,
                      ]}
                />
            </div>
        );
    }
}

export default HeaderComponent;