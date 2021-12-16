/* eslint-disable no-unused-vars */
import React, { Fragment, useEffect, useState } from "react";
import { Row, Col, Select, Table, Button, Form } from "antd";
import { connect } from 'react-redux';


import { getNewsListByParams } from '../../store/actions';

import SelectNews from '../../components/SelectNews'

const { Option } = Select;

function PageinationTest(props) {
  const [form] = Form.useForm();
  const [selectCus, setSelectCus] = useState([]);
  const [selectDiaVisible, setSelectDiaVisible] = useState(false);
  // const [unselectCus, setUnSelectCus] = useState([]);
  // useEffect(() => {
  //   const { dispatch } = props;
  //   dispatch(getArtileList({ page: 2 })).then(res => {
  //     // console.log('result',res);
  //   });

  // }, []);

  const handleDialoghide = () => {
    setSelectDiaVisible(false)
  }

  const onRadioChange = (val) => {

    setSelectCus([].concat([...selectCus, ...val]));

  }

  const setCustomerGroupVal = (srowKeys) => {
    console.log('result 120',srowKeys)
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