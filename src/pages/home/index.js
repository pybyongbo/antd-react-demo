import React from 'react';

import { Input, Row, Col, List, Button,Tag ,Empty} from 'antd';

import store from '../../store/store'
import { getInputChangeAction, getAddItemAction, delItemAction } from '../../store/actions'

import closeImg from '../../assets/icon-close.png'

import {randomNum} from '../../utils/index';

import moment from 'moment';
import './index.less'

export default class Home extends React.Component {

     constructor(props){
        super(props)
        this.state = {
            list: store.getState().list,
            value: store.getState().inputValue,
            errorText:'',
            tagcolorArr:['#ff5500','#2db7f5','#87d068','#108ee9','orange','volcano','gold','cyan','geekblue','purple']
        }
        store.subscribe(this.handleChange)
    }
    componentDidMount(){
        console.log(this.state.value)
    }
    handleChange = () =>{
        this.setState(store.getState())
    }
    handleInputChange = (e)=>{
        const action = getInputChangeAction(e.target.value);
        e.target.value && this.setState({
            errorText:''
        })
        store.dispatch(action);
    }

     //按Enter键触发提交
     addItemEnter=(e)=>{
        if(e.key === "Enter") {
            this.handAdd();
        }
    }

    handAdd = () =>{
        const action = getAddItemAction();
        !this.refs.myInput.input.value && this.setState({
            errorText:'文本框值不能为空提交哦~'
        }) 

        this.refs.myInput.input.value && store.dispatch(action);
        console.log(this.refs.myInput.input.value);

    }
    handleDel = (e) => {
        const action = delItemAction(e);
        console.log(e);
        store.dispatch(action);
    }
    render() {

        const {tagcolorArr} = this.state;
        return (
            <div className="App">
                <h1>React+Redux+Antd实现todolist功能:</h1>
                <Row className="todo-box">
                    <Col span={6}>
                    <Input size="large" placeholder='请输入待办事项' onChange={e => this.handleInputChange(e)} ref="myInput" onKeyPress={(e)=>this.addItemEnter(e)} value={this.state.inputValue}/>
                    </Col>

                    <Col span={2} >
                        <Button size="large" style={{ marginLeft: '10px',marginRight:'10px' }} type="primary" onClick={this.handAdd}>提交</Button>
                    </Col>
                    <Col span={4}>
                    <div className="errorTips">
                    {this.state.errorText && <p>{this.state.errorText}</p>}
                    </div>
                    </Col>

                </Row>
             
                <Row className="todo-box" style={{marginTop:'20px'}}>
                    <Col span={10}>
                        <List
                            bordered
                            split={true}
                            dataSource={this.state.list}
                            pagination={{
                                hideOnSinglePage:true,
                                onChange: page => {
                                  console.log(page);
                                },
                                pageSize: 3,
                              }}
                            locale={{
                                emptyText: (
                                    <Empty
                                        className="cm-empty"
                                        image={require('../../assets/no-data.png')}
                                        description={
                                            <span>
										<b>暂无数据</b>
                                        </span>
                                        }
                                    />
                                )
                            }}
                            renderItem={item => (
                                <List.Item 
                                // gutter={100}
                                className='flex' 
                                onClick={()=>this.handleDel(item)} 
                               
                                actions={[<img src = {closeImg} alt="删除" />,<a key="list-loadmore-more">删除</a>]}>
                                <span>{item.content} </span>
                                <Tag className="tag" color={tagcolorArr[randomNum(0,10)]}>
                                 添加时间:{moment(item.timeStamp).format('YYYY-MM-DD hh:mm:ss')}
                                </Tag>
                                {/* <Button type="danger" onClick={()=>this.handleDel(item)}>删除</Button> */}
                            </List.Item>
                               )
                            }
                        />
                    </Col>
                </Row>
            </div>
        );

    }
}