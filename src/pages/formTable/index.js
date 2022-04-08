/* eslint-disable no-unused-expressions */
/* eslint-disable no-unused-vars */
import React, { Fragment, useRef, useEffect, useState } from "react";
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

  const selectRef = useRef();
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

  const onHandleSubmit = (val) => {

    const productIds = val?.productIds.flat(2);
    console.log('productIds', productIds)

    console.log({
      ...val,
      productIds
    });
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

  // 自定义表单控件部分

  const PriceInput = ({ value = {}, onChange }) => {

    const [number, setNumber] = useState(0);
    const [currency, setCurrency] = useState('rmb');

    const triggerChange = (changeValue) => {
      onChange?.({
        number,
        currency,
        ...value,
        ...changeValue
      })
    }

    const onNumberChange = (e) => {
      const newNumber = parseInt(e.target.value || '0', 10);

      if (Number.isNaN(number)) {
        return;
      }

      if (!('number' in value)) {
        setNumber(newNumber);
      }

      triggerChange({
        number: newNumber,
      });
    }

    const onCurrencyChange = (newCurrency) => {
      if (!('currency' in value)) {
        setCurrency(newCurrency);
      }

      triggerChange({
        currency: newCurrency,
      });
    };



    return (
      <span>
        <Input
          type="text"
          value={value.number || number}
          onChange={onNumberChange}
          style={{
            width: 100,
          }}
          placeholder="请输入价格"
        />
        <Select
          value={value.currency || currency}
          style={{
            width: 80,
            margin: '0 8px',
          }}
          onChange={onCurrencyChange}
        >
          <Option value="rmb">RMB</Option>
          <Option value="dollar">Dollar</Option>
        </Select>
      </span>
    );

  }
  const checkPrice = (_, value) => {
    if (value.number > 0) {
      return Promise.resolve();
    }

    return Promise.reject(new Error('产品价格需大于0!'));
  };


  const selFocus = () => {
    // selectRef.current.focus();
    selectRef.current.focus({
      cursor: 'all',
    });
  }

  return (
    <Fragment>

      <Form
        validateTrigger={['onChange', 'onBlur']}
        style={{ width: '100%', marginTop: 50 }}
        name="addPushConfigform"
        form={form}
        labelAlign="right"
        labelCol={{ span: 4 }}
        onFinish={onHandleSubmit}
        initialValues={{
          price: {
            number: 0,
            currency: 'rmb',
          },
        }}
      >
        <Row><h3>组合表单提交测试,测试自定义表单控件</h3></Row>
        <br />
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

        <Row>
          <Col span={18}>
            <Form.Item
              name="price"
              label="产品价格"
              rules={[
                {
                  validator: checkPrice,
                },
              ]}
            >
              <PriceInput />
            </Form.Item>
          </Col>
        </Row>

        <Row>
          <Col span={18}>
            <Form.Item
              label="URL"
              name="url"
              rules={[
                ({ getFieldValue }) => ({
                  validator(_, value) {
                    if (!value || /[a-zA-Z0-9][-a-zA-Z0-9]{0,62}(\.[a-zA-Z0-9][-a-zA-Z0-9]{0,62})+\.?/.test(getFieldValue('url').trim())) {
                      return Promise.resolve();
                    }
                    return Promise.reject(new Error('请输入有效URL地址！'));
                  },
                }),
              ]}
            >
              <Input.TextArea rows={4} maxLength={255} placeholder="非必填,如果填写,请输入有效的URL地址">
              </Input.TextArea>
            </Form.Item>
          </Col>
        </Row>

        <Row>
          <Col>
            <Form.Item>
              <Button type="primary" htmlType="submit">
                Submit
              </Button>
            </Form.Item>
          </Col>
        </Row>

        <br /><br />
        <Form.Item
          name="name"
          initialValue={'jack'}
        >
          {/* <Select ref={selectRef} style={{ width: 300 }}>
            <Option value="jack">Jack</Option>
            <Option value="lucy">Lucy</Option>
          </Select> */}
          <Input ref={selectRef} />
        </Form.Item>
        <Button
          onClick={() => { selFocus() }}
        >blur
        </Button>

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