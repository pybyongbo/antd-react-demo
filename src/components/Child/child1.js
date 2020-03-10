import React from 'react';
import { Input, Button } from 'antd';
class Child1 extends React.Component {

    handleChange = e => {
        this.value = e.target.value;
    }

    handleClick = () => {
        const { setValue } = this.props;
        setValue(this.value);
    }

    render() {
        return (
            <div className="card">
                我是Child, state 定义在 parent
                    <Input onChange={this.handleChange}  style={{marginTop:10,marginBottom:10}}/>
                <div >
                    <Button type="primary" onClick={this.handleClick}>
                        通知
                    </Button>
                </div>
            </div>
        );
    }
}

export default Child1;