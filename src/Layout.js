import React from 'react';
import { Row, Col } from 'antd';

import NavLeft from './components/NavLeft'

export default class Basiclayout extends React.Component {

    render() {
        return (
            <Row className="container">
                <Col span={4} className="nav-left">
                    <NavLeft></NavLeft>
                </Col>
                <Col span={20} className="main">
                    {/* <Header></Header> */}
                    <Row className="content">
                        {/* <Home/> */}
                        {this.props.children}
                    </Row>
                </Col>
            </Row>
        )
    }
}