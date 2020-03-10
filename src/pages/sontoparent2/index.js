import React from 'react';
import { Card, Divider } from 'antd';
import Child2 from '../../components/Child/child2'
class Parent extends React.Component {

    constructor() {
        super();
        this.state = {
            fromchildVal: '',
        }
    }

    onChange = value => {
        console.log(value, '来自 child 的 value 变化');
        this.setState({
            fromchildVal:value
        })
    }

    render() {
        return (
            <Card style={{ width: 960, margin: 20 }}>
                <h1>子 → 父</h1>
                <h2>state 定义在 child 组件</h2>
                <div>
                    我是parent,来自子组件的值{this.state.fromchildVal}
                </div>

                <Divider />

                <Child2 onChange={this.onChange} />

                <p style={{ marginTop: 10, color: 'red' }}>
                有时候 state 是需要定义在 child 组件的，比如弹窗， CheckBox 这种开关性质的，逻辑是重复的，state 定义在组件内部更好维护， 复用性更好。但是 child 的 state 是需要告知我的 parent 组件的， 同样还是执行 parent 传下来的 change 函数。
                </p>

            </Card>
        )
    }
}

export default Parent;