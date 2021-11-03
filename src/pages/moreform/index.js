import React, { Fragment, useState, useRef } from "react";
import { Row, Col, Form, Divider, Button, Radio, Space, Tabs } from "antd";

import FormBasic from '../../components/FormBasic';

// import FormDataconfig from '../../components/FormConfig';

import AllForm from '../../components/AllForm';
import RateForm from '../../components/RateForm';
import TimeForm from '../../components/TimeForm';

const { TabPane } = Tabs;
const TagForm = (props) => {
  const [valueType, setValueType] = useState("all");
  const [strategyType, setStrategyType] = useState("all");
  const [fBasic] = Form.useForm();
  const formRefBasic = useRef();
  const formRefAll = useRef();
  // const [formRefBasic,formRefAll] = useRef();
  const formRef2 = useRef();
  const [tabActivekey, setTabActivekey] = useState(0);
  // 全部数据:
  const [allData, setAllData] = useState([{
    strategyType: 'all',
    dayOfWeek: 'all',
    rate: [],
    time: []
  }]);

  // 星期数据:
  const [weekDayArr, setWeekDayArr] = useState([
    {
      dayOfWeek: 1,
      strategyType: 'all',
      rate: [],
      time: []
    },
    {
      dayOfWeek: 2,
      strategyType: 'all',
      rate: [],
      time: []
    },
    {
      dayOfWeek: 3,
      strategyType: 'all',
      rate: [],
      time: []
    },
    {
      dayOfWeek: 4,
      strategyType: 'all',
      rate: [],
      time: []
    },
    {
      dayOfWeek: 5,
      strategyType: 'all',
      rate: [],
      time: []
    },
    {
      dayOfWeek: 6,
      strategyType: 'all',
      rate: [],
      time: []
    },
    {
      dayOfWeek: 7,
      strategyType: 'all',
      rate: [],
      time: []
    }
  ])

  const onChangeAllorWeek = (e) => {
    setValueType(e.target.value);
    setStrategyType("all");
  }

  const onChangeType = (e) => {
    setStrategyType(e.target.value)
  }

  const onTabChange = (activeKey) => {
    setTabActivekey(activeKey || 'all');

  }

  const getModifiyDataAll = (cVal, cindex) => {
    allData[cindex] = { ...cVal, dayOfWeek: "all", strategyType };
    setAllData(allData);

  }
  const getModifiyDataWeek = (cVal, cindex) => {

    weekDayArr[cindex] = { ...cVal, dayOfWeek: +cindex + 1, strategyType };
    setWeekDayArr(weekDayArr);
  }

  const SavaData = () => {

    const pbasic = formRefBasic.current.validatabasicform();
    const pAll = formRefAll.current.validataallform()
    // console.log('result',useRef());

    Promise.all([pbasic, pAll]).then(res => {
      console.log('result', res)
    })

    console.log(valueType === "week" ? weekDayArr : allData);

  }
  return (
    <Fragment>
      <h2>一个页面多个表单测试</h2>
      <br />
      <Divider />
      <FormBasic
        form={fBasic}
        ref={formRefBasic}
      ></FormBasic>

      <Divider />

      <div style={{ width: '100%' }}>

        <Radio.Group onChange={onChangeAllorWeek} value={valueType}>
          <Radio value="all">全部</Radio>
          <Radio value="week">星期</Radio>
        </Radio.Group>

      </div>

      <Divider />

      <br /><br />
      <br />
      <Row gutter={[10, 50]} style={{ width: '100%' }}>
        <Col span={4} style={{ marginTop: 40 }}>
          <Radio.Group onChange={onChangeType} value={strategyType}>
            <Space direction="vertical">
              <Radio.Button value="all">按全量</Radio.Button>
              <Radio.Button value="rate">按比例</Radio.Button>
              <Radio.Button value="time">按时段</Radio.Button>
            </Space>
          </Radio.Group>
        </Col>
        <Col span={20}>

          {
            valueType === "week" ?
              <Tabs defaultActiveKey="0" centered onChange={onTabChange}>
                {weekDayArr.map((item, index) => {
                  return <TabPane tab={`星期${(index + 1)}`} key={index} >
                    <AllForm
                      ref={formRefAll}
                      cindex={index}
                      getModifiyData={getModifiyDataWeek}
                      strategyType={strategyType}
                    />
                    <RateForm
                      cindex={index}
                      getModifiyData={getModifiyDataWeek}
                      strategyType={strategyType}
                    />
                    <TimeForm
                      cindex={index}
                      getModifiyData={getModifiyDataWeek}
                      strategyType={strategyType}
                    />
                  </TabPane>
                })}
              </Tabs>
              :
              <div>
                <AllForm
                  ref={formRefAll}
                  getModifiyData={getModifiyDataAll}
                  strategyType={strategyType}
                />
                <RateForm
                  getModifiyData={getModifiyDataAll}
                  strategyType={strategyType}
                />
                <TimeForm
                  getModifiyData={getModifiyDataAll}
                  strategyType={strategyType} />
              </div>
          }
        </Col>
      </Row>

      {/* <div className="content">

      </div>

      <br /><br /> */}
      <Button
        style={{ marginTop: 50 }}
        type="primary"
        block
        onClick={SavaData}
      >
        保存
    </Button>
    </Fragment>
  );
};
export default TagForm;
