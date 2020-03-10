import React from 'react';
import { Card, Input, Button } from 'antd';
import Child from '../../components/SonComponent/index'
class Parent extends React.Component {
    constructor() {
        super();
        this.state = {
            value: '',
        }
    }
    handleChange = e => {
        this.value = e.target.value;
    }

    handleClick = () => {
        this.setState({
            value: this.value,
        })
    }

    render() {
        return (
            <Card style={{width:960,margin:20}}>
                <h1>父 → 子</h1>
                <p>
                parent组件传给child组件，符合react的单向数据流理念，自上到下传递props。
                </p>
                <br/>
                我是Parent:
                <Input onChange={this.handleChange} style={{ width: 200, marginLeft: 10 ,marginBottom:10}} />
                <div style={{marginBottom:10}}>
                    <Button type="primary" onClick={this.handleClick}>通知子组件</Button>
                </div>

                <div>
                   <Child value={this.state.value} />
                </div>

                <br/>
                <br/>
                <p style={{color:'red'}}>
                父组件做的就是定义好 state ，定义好事件函数，input onChange 的时候，去缓存 value 值，然后点击 button 的时候，改变 state , 子组件只负责展示 value 。
                </p>
            </Card>
        )
    }
}

export default Parent;