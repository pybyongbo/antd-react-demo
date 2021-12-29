/* eslint-disable no-unused-vars */
import React, { Fragment, useEffect, useState } from "react";
import { Row, Col, Select, Table, Button, Form, Cascader, Divider, Input } from "antd";
import { connect } from 'react-redux';

import moment from 'moment';

import { getNewsListByParams } from '../../store/actions';

import SelectNews from '../../components/SelectNews';

import './index.less';

const { Search } = Input;

const { Option } = Select;

function PageinationTest(props) {
  const [form] = Form.useForm();
  const [selectCus, setSelectCus] = useState([]);
  const [selectDiaVisible, setSelectDiaVisible] = useState(false);
  // const [unselectCus, setUnSelectCus] = useState([]);
  useEffect(() => {
    //   const { dispatch } = props;
    //   dispatch(getArtileList({ page: 2 })).then(res => {
    //     // console.log('result',res);
    //   });
    // formatData();
  }, []);


  // const formatData = (arr) => {

  //   const res = {
  //     '2021-12-20': { a: 1 },
  //     '2021-10-20': { b: 2 },
  //     '2021-03-10': { c: 3 }
  //   }

  //   const resArr = Object.keys(res).map(item => {
  //     return moment(item).unix()
  //   }).sort((a, b) => a - b);
  //   console.log('result', resArr);

  //   resArr.map(item => {
  //     console.log('result', moment(item * 1000).format('YYYY-MM-DD'));
  //     console.log('result', res[moment(item * 1000).format('YYYY-MM-DD')]);
  //   })

  //   return resArr

  // }

  const handleDialoghide = () => {
    setSelectDiaVisible(false)
  }

  const onRadioChange = (val) => {

    setSelectCus([].concat([...selectCus, ...val]));

  }

  const setCustomerGroupVal = (srowKeys) => {
    console.log('result 120', srowKeys)
    form.setFieldsValue({
      customerGroupIdList: srowKeys
    });

    handleDialoghide();
    console.log('1111', selectCus)
  }

  const dialogObj = {
    groupList: form.getFieldValue('customerGroupIdList'),
    selectDiaVisible,
    handleDialoghide,
    onRadioChange,
    setCustomerGroupVal,
  }

  const onHandleSubmit = () => {

  }

  console.log('result props', props);
  const { todolist: { artileList } } = props;

  const options = [
    {
      label: 'test1',
      value: 'test1',
    },
    {
      label: 'test2',
      value: 'test2',
    },
    {
      label: 'test3',
      value: 'test3',
    },
    {
      label: 'test4',
      value: 'test4',
    },
    {
      label: 'test5',
      value: 'test5',
    },
  ];

  const onSearch = () => {
    console.log('result search');
  }

  const onChange = (value) => {
    console.log(value);
  }

  const filter = (inputValue, path) => {
    console.log('result', inputValue, path);
    console.log(path.some(option => option.label.toLowerCase().indexOf(inputValue.toLowerCase()) > -1))
    return path.some(option => option.label.toLowerCase().indexOf(inputValue.toLowerCase()) > -1);
  }


  const setCheckAll = () => {
    form.setFieldsValue({
      productIds: [['test1'], ['test2'], ['test3'], ['test4'], ['test5']]
    })
  }

  const setUnCheckAll = () => {
    form.setFieldsValue({
      productIds: []
    })
  }

  const dropdownRender = (menus) => {
    // console.log('menus', menus.props.values);
    return (
      <div>
        {/* <Search placeholder="input search text" onSearch={onSearch} style={{ width: 200 }} /> */}
        {menus}
        <Divider style={{ margin: 0 }} />
        <div style={{ padding: 8 }}>
          <Button onClick={setCheckAll}>全部选中</Button>
          <Button onClick={setUnCheckAll}>取消全选</Button>
        </div>
      </div>
    )

  }


  return (
    <Fragment>
      <Form
        // validateTrigger={['onChange', 'onBlur']}
        style={{ width: '100%', marginTop: 50 }}
        name="addPushConfigform"
        form={form}
        labelAlign="right"
        labelCol={{ span: 4 }}
        onFinish={onHandleSubmit}
      >

        <Row>
          <Col span={18}>
            <Form.Item
              name="customerGroupIdList"
              label="客群选择"
            >
              <Select
                style={{ width: '80%' }}
                placeholder="请选择客群"
                mode="multiple"
                open={false}
                onChange={(val) => {
                  // groupListValchange(val);
                  // getGroupDetailsById(val, false);
                }}
              >
                {selectCus.length > 0 &&
                  selectCus.map((item) => {
                    return (
                      <Option value={item.id} key={item.id}>
                        {item.title}
                      </Option>
                    );
                  })}
              </Select>
            </Form.Item>

            <Button
              className="select-btn"
              type="primary"
              style={{ minWidth: 45, padding: '0 10px', position: "absolute", top: 0, right: 0 }}
              onClick={() => {
                setSelectDiaVisible(true);
                // setOptType('cusSelect');
                // dispatch(getArtileList({ page: 2 }))
                props.dispatch(getNewsListByParams({ page: 1, pageSize: 5 }));
              }
              }
            >
              选择
            </Button>
          </Col>
        </Row>


        <Row>
          <Col span={18}>
            <Form.Item
              name="productIds"
              label="产品选择"
            >

              <Cascader
                // style={{ width: 480 }}
                showSearch={{ filter, matchInputWidth: true }}
                dropdownClassName="prodropdown"
                dropdownRender={dropdownRender}
                options={options}
                onChange={onChange}
                multiple
              >
              </Cascader>
            </Form.Item>
          </Col>



        </Row>

      </Form>
      {selectDiaVisible && <SelectNews {...dialogObj}></SelectNews>}

    </Fragment>

  )


}


const mapStateToProps = state => ({
  ...state
});

const mapDispatchToProps = dispatch => ({ dispatch });

export default connect(mapStateToProps, mapDispatchToProps)(PageinationTest);