import React from 'react';
import { Card,Divider } from 'antd';
import Child1 from '../../components/Child/child1'
class Parent extends React.Component {
    constructor() {
        super();
        this.state = {
            value: '',
        }
    }
    setValue = value =>{
        this.setState({
            value
        })
    }
    render() {
        return (
            <Card style={{width:960,margin:20}}>
                <h1>子 → 父</h1>
                <h2>state 定义在 parent 组件</h2>
                <div>
                    我是parent,Value是:{this.state.value}
                </div>

                <Divider/>

                <Child1 setValue={this.setValue}/>

                <p style={{marginTop:10,color:'red'}}>
                parent 组件把改变 state 的 setValue 函数传给 child ，child 组件自己处理内部的状态（这里是表单的value值），当 child 组件分发消息的时候， 执行 parent 的 setValue 函数，从而改变了 parent 的 state，state发生变化， parent 组件执行 re-render 。
                </p>
                
            </Card>
        )
    }
}

export default Parent;