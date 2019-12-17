import React from 'react';
import { Select } from 'antd';

const { Option } = Select;

export default class SexSelect extends React.PureComponent {
    constructor(props) {
        super(props);
        const { value } = props;
        this.state = {
            value
        };
    }
    handleChange = value => {
        const { onChange } = this.props;
        this.setState({
            value
        });
        if (onChange) {
            onChange(value);
        }
    };
    render() {
        const { value } = this.state;
        return (
            <Select
                value={value}
                onChange={this.handleChange}
                style={{ width: '100%' }}
                placeholder="请选择性别"
            >
                <Option value={1}>男</Option>
                <Option value={2}>女</Option>
            </Select>
        );
    }

}