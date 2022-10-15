import React, {
  forwardRef,
  Fragment,
  useEffect,
  useImperativeHandle
} from "react";
import { Form, Input, Row, Col, InputNumber, Button } from "antd";
import { DeleteOutlined } from '@ant-design/icons';
const RateForm = forwardRef((props, RateFormRef) => {
  const [form] = Form.useForm();
  const { strategyType, getModifiyData, cindex } = props;
  useEffect(() => {
    console.log('result 3', strategyType)
    form.setFieldsValue({
      time: [{}]
    })
  }, [form, strategyType]);
  useImperativeHandle(RateFormRef, () => ({

  }));
  const handleValuesChange = (changedValues, allValues) => {
    getModifiyData && getModifiyData(allValues, cindex || 0);
  }
  return (
    <Fragment>
      <Form
        form={form}
        onValuesChange={handleValuesChange}
      >
        <div style={{ display: strategyType === "time" ? 'block' : 'none' }}>
          <Form.List name="time">
            {(fields, { add, remove }) => (
              <>
                {fields && fields.map(field => (
                  <Row key={field.key} align="baseline">
                    {/* <Col span={1} /> */}
                    <Col span={6}>
                      <Form.Item
                        label="开始时间"
                        name={[field.name, 'startHour']}
                        fieldKey={[field.fieldKey, 'startHour']}
                        rules={[{ required: strategyType === "time", message: '请选择开始时间' }]}
                      >
                        <InputNumber min={0} max={24} />

                      </Form.Item>
                    </Col>
                    <Col span={6}>
                      <Form.Item
                        label="结束时间"
                        name={[field.name, 'endHour']}
                        fieldKey={[field.fieldKey, 'endHour']}
                        rules={[{ required: strategyType === "time", message: '请选择结束时间' }]}
                      >
                        <InputNumber min={0} max={24} />

                      </Form.Item>
                    </Col>
                    <Col span={10}>
                      <Form.Item
                        noStyle
                        shouldUpdate
                      >
                        {() => (
                          <Form.Item
                            {...field}
                            label="链接"
                            name={[field.name, 'url']}
                            fieldKey={[field.fieldKey, 'url']}
                            rules={[
                              { required: strategyType === "time", message: '请填写链接' },
                              {
                                min: 1,
                                max: 1000,
                                message: '不可超过1000字'
                              },
                              {
                                pattern: /^(ht|f)tps?:\/\/(([a-zA-Z0-9_-])+(\.)?)*(:\d+)?(\/((\.)?(\?)?=?&?([a-zA-Z0-9_-]|#|%)(\?)?)*)*$/i,
                                message: '请输入有效网址！'
                              }
                            ]}
                          >
                            <Input placeholder="请输入链接" />
                          </Form.Item>
                        )}
                      </Form.Item>
                    </Col>

                    { field.name > 0 && <DeleteOutlined onClick={() => remove(field.name)} style={{ marginTop: 7, marginLeft: 10 }} />}
                  </Row>
                ))}

                <Form.Item>
                  <Button
                    type="primary"
                    // className={styles.addBtn}
                    onClick={() => add()}
                  >
                    {/* <MIcon type="add" style={{ fontSize: '12px' }} /> */}
                      添加
                </Button>
                </Form.Item>
              </>
            )}
          </Form.List>
        </div>
      </Form>
    </Fragment>
  );
});
export default RateForm;
