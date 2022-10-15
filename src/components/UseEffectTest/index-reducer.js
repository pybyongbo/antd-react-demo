import React, { useEffect, useState, useReducer } from 'react';
// import useDeepCompareEffect from 'use-deep-compare-effect';
import { Button, Modal, Form, Input, Select, Space } from 'antd';
import DrawerForm from '../../pages/modalTest/components/pagedrawer';
import DrawerFormOther from '../../pages/modalTest/components/pagedrawer2';

import { PlusCircleOutlined, DeleteOutlined } from '@ant-design/icons';

const { Option } = Select;

const initState = {
  addUserShow: false,
  addOrgShow: false
}


function modalReducer(state, action) {
  switch (action.type) {
    case 'optDialog':
      return {
        ...state,
        ...action.payload
      }
    default:
      return state;
  }
}




const DialogReducerDemo = () => {


  const [formbasic] = Form.useForm();
  const [state, dispatch] = useReducer(modalReducer, initState);
  const { addUserShow, addOrgShow } = state;

  // console.log('addUserShow', addUserShow);

  const [obj, setObj] = useState({ name: 'pyb' });

  // 测试字段赋值的优先级.
  useEffect(() => {
    formbasic.setFieldsValue({
      testfield: 3
    })
  }, []);

  useEffect(() => {

    console.log('我执行了~~~~~~')
  }, [obj])

  const changeObj = () => {
    setObj({ ...obj, age: 30 });
  }



  const optDialog = (key, isShow) => {

    dispatch({
      type: 'optDialog',
      payload: {
        [key]: isShow ? true : false
      }
    })
  }


  const onHandleSubmit = (val) => {

    val && console.log(123, val);
  }

  const onHandleSubmitOther = (val) => {
    val && console.log(456, val);
  }


  const onBasicFinish = (val) => {
    console.log('val', val);
  }


  return (
    <div>
      <br /><br /><br />
      <h3>测试useReducer</h3>
      <br />
      <Button onClick={() => optDialog('addUserShow', true)} style={{ marginRight: 20 }}>打开新增用户弹框</Button>

      <Button onClick={() => optDialog('addOrgShow', true)}>打开新增机构弹框</Button>


      <Modal
        title="用户弹框"
        visible={addUserShow}
        okButtonProps={{
          htmlType: 'submit',
          form: 'drawerform',
          className: 'del-user-btn'
        }}
        // forceRender={true}
        destroyOnClose={true}
        // onOk={() => onHandleSubmit()}
        onCancel={() => optDialog('addUserShow', false)}
      >
        {addUserShow && <DrawerForm onHandleSubmit={onHandleSubmit} />}


      </Modal>


      <Modal
        title="机构弹框"
        visible={addOrgShow}
        okButtonProps={{
          htmlType: 'submit',
          form: 'otherdrawerform',
          className: 'del-user-btn'
        }}
        forceRender={true}
        onCancel={() => optDialog('addOrgShow', false)}
      >
        {addOrgShow && <DrawerFormOther onHandleSubmit={onHandleSubmitOther} />}
      </Modal>


      <Form
        style={{ marginTop: 30 }}
        name="basic"
        form={formbasic}
        // initialValues={{
        //   testfield: 2
        // }}
        onFinish={onBasicFinish}
      >

        <Form.Item
          label="测试字段"
          name="testfield"
        // initialValue={1}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="敏感词"
          required={true}
        >
          <Form.List
            name="weWorkMessageSensitiveDtoList"
            initialValue={[{
              sensitiveTitle: '',
              interceptType: '3'
            }]}
            rules={[
              {
                required: true,
                validator: async (_, names) => {
                  console.log(1111, names);
                  if (!names || names.length < 1) {
                    return Promise.reject(new Error('请至少添加一条敏感词'));
                  }
                  const uniqueArr = [...new Set(names)]
                  console.log(2222, uniqueArr)
                  if (uniqueArr.length !== names.length) {
                    return Promise.reject(new Error('当前表单存在重复的敏感词'));
                  }
                },
              },
            ]}
          >
            {(fields, { add, remove }, { errors }) => (
              <>
                {fields.map(({ key, name, ...field }, index) => (
                  <Space key={key} style={{ display: 'flex', marginBottom: 8 }} align="center">

                    <Form.Item
                      {...field}
                      name={[name, 'sensitiveTitle']}
                      rules={[
                        {
                          required: true,
                          whitespace: true,
                          message: "请输入敏感词",
                        },
                        {
                          validator: async (rule, value) => {
                            if (/[^a-zA-Z0-9\u4E00-\u9FA5]/g.test(value)) {
                              return Promise.reject(new Error('只能输入中文、英文、数字'));
                            }
                            return Promise.resolve()
                          }
                        }
                      ]}
                      noStyle
                    >
                      <Input maxLength={24} placeholder="请输入与敏感词" style={{ width: '210px', transition: 'none', height: 36 }} className="customBorderRadius" />
                    </Form.Item>
                    <Form.Item
                      {...field}
                      name={[name, 'interceptType']}
                      initialValue='3'
                      noStyle
                    >
                      <Select style={{ width: 120 }} className="customBorderRadius">
                        <Option value="1">拦截并提醒</Option>
                        <Option value="2">提醒</Option>
                        <Option value="3">不拦截不提醒</Option>
                      </Select>
                    </Form.Item>
                    {
                      fields.length > 1 && <span
                        onClick={() => remove(name)}

                      ><DeleteOutlined />删除</span>
                    }
                    {
                      (index === fields.length - 1) && <span
                        onClick={() => add()}
                      ><PlusCircleOutlined />新增</span>
                    }
                  </Space>

                ))}
                <Form.Item noStyle>
                  <Form.ErrorList errors={errors} />
                </Form.Item>
              </>
            )}
          </Form.List>
        </Form.Item>

        <Form.Item >
          <Form.Item
            name="conmment"
          >
            <Input />
          </Form.Item>
          <Form.Item noStyle>
            <div>表单元素(这里展示额外说明信息)</div>
          </Form.Item>

        </Form.Item>
        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>

          <Button
            style={{ marginLeft: 20 }}
            type="default"
            onClick={changeObj}
          >
            Test Click
          </Button>
        </Form.Item>
      </Form>


    </div>
  )
}


export default DialogReducerDemo;