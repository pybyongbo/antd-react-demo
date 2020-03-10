import React from 'react';
import { Input, Button } from 'antd';


//Brother1兄弟组件

class Brother1 extends React.Component {

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
                我是Brother 1
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

export default Brother1;