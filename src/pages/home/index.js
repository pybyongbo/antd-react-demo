/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';

import { Input, Row, Col, List, Button, Tag, Empty, Checkbox, Radio } from 'antd';

import store from '../../store/store'
import {
  getInputChangeAction,
  getAddItemAction,
  changeItemStatusAction,
  // setVisibilityFilterAction,
  delItemAction
} from '../../store/actions'

import closeImg from '../../assets/icon-close.png'

// import { randomNum } from '../../utils/index';

// import { getArticleList, getUserList } from '../../services/index';

import moment from 'moment';
import './index.less'

export default class Home extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      list: store.getState().list,
      value: store.getState().inputValue,
      errorText: '',
      tagcolorArr: ['#ff5500', '#2db7f5', '#87d068'],
      curStatus: 0
    }
    store.subscribe(this.handleChange);
  }
  componentDidMount() {
    // console.log(this.state.value);

  }
  handleChange = () => {
    this.setState(store.getState());
    console.log('result state', this.state.list);
  }
  handleInputChange = (e) => {
    const action = getInputChangeAction(e.target.value);
    e.target.value && this.setState({
      errorText: ''
    })
    store.dispatch(action);
  }

  //按Enter键触发提交
  addItemEnter = (e) => {
    if (e.key === "Enter") {
      this.handAdd();
    }
  }

  handAdd = () => {
    const action = getAddItemAction();
    !this.refs.myInput.input.value && this.setState({
      errorText: '文本框值不能为空提交哦~'
    })

    this.refs.myInput.input.value && store.dispatch(action);
    console.log(this.refs.myInput.input.value);

  }
  handleDel = (e) => {
    const action = delItemAction(e);
    console.log(e);
    store.dispatch(action);

  }
  // 选中与取消选中
  onChangeCheck = (obj, checked) => {
    console.log('result', obj, checked);
    const action = changeItemStatusAction(obj, checked);
    store.dispatch(action);
  }

  onChangeFilter = (val) => {

    // const action = setVisibilityFilterAction(val);
    // store.dispatch(action);
    // console.log('result store.getState()', store.getState());
    // const flist = () => {

    // }
    this.setState({
      list: this.flist(val).clist
    })
  }

  flist = (val) => {
    const slistArr = store.getState().list;
    if (val === 0) {
      return {
        clist: slistArr,
        count: slistArr.length || 0
      }
    } else if (val === 1) {
      return {
        clist: slistArr.filter(item => item.status === true),
        count: slistArr.filter(item => item.status === true).length || 0
      }
    } else {

      return {
        clist: slistArr.filter(item => item.status === false),
        count: slistArr.filter(item => item.status === false).length || 0
      }
    }
  }


  render() {

    const { tagcolorArr } = this.state;
    return (
      <div className="App">
        <h1>React+Redux+Antd实现todolist功能:</h1>
        <Row className="todo-box">
          <Col span={20}>
            <Input size="large" placeholder='请输入待办事项'
              onChange={e => this.handleInputChange(e)}
              ref="myInput"
              onKeyPress={(e) => this.addItemEnter(e)}
              value={this.state.inputValue} />
          </Col>

          <Col span={2} >
            <Button size="large" style={{ marginLeft: '10px', marginRight: '10px' }} type="primary" onClick={this.handAdd}>提交</Button>
          </Col>
          <Col span={12}>
            <div className="errorTips">
              {this.state.errorText && <p>{this.state.errorText}</p>}
            </div>
          </Col>

        </Row>

        <Row>
          <Radio.Group
            onChange={(e) => this.onChangeFilter(e.target.value)} d
            efaultValue={0}
            style={{ marginRight: 10 }}
          >
            <Radio.Button value={0}>全部({this.flist(0).count})</Radio.Button>
            <Radio.Button value={1}>已完成({this.flist(1).count})</Radio.Button>
            <Radio.Button value={2}>未完成({this.flist(2).count})</Radio.Button>
          </Radio.Group>

        </Row>

        <Row className="todo-box" style={{ marginTop: '20px' }}>
          <Col span={24}>
            <List
              bordered
              split={true}
              dataSource={this.state.list}
              pagination={{
                hideOnSinglePage: true,
                onChange: page => {
                  console.log(page);
                },
                pageSize: 5,
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
              renderItem={(item, index) => (
                <List.Item
                  gutter={100}
                  className='flex'
                  actions={[<img src={closeImg} alt="删除" onClick={() => this.handleDel(item)} />, <a key="list-loadmore-more" onClick={() => this.handleDel(item)}>删除</a>]}>
                  <div>
                    <i style={{ marginRight: 10 }}><Checkbox checked={item.status} onChange={(e) => this.onChangeCheck(item, e.target.checked)} /></i>
                    <span style={{ textDecoration: item.status ? "line-through" : "none" }}>{item.content} </span>
                  </div>

                  <Tag className="tag" color={tagcolorArr[index]}>
                    添加时间:{moment(item.timeStamp).format('YYYY-MM-DD hh:mm:ss')}
                  </Tag>

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