import React from 'react';
import { Input, Button } from 'antd';
class Child2 extends React.Component {

    constructor(){
        super();
        this.state = {
            childValue:''
        }
    }

    childValChange = e =>{
        this.childVal = e.target.value;
    }

    childValDispatch = () =>{
        const {onChange} = this.props;
        this.setState({
            childValue:this.childVal
        },()=>{
            onChange(this.state.childValue)
        })
    }

    render() {
        return (
            <div className="card">
                我是Child, state 定义在 child
                    <Input onChange={this.childValChange}  style={{marginTop:10,marginBottom:10}}/>
                <div >
                    <Button type="primary" onClick={this.childValDispatch}>
                        通知
                    </Button>
                </div>
            </div>
        );
    }
}

export default Child2;