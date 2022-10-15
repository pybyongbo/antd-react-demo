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
    console.log('result 2', strategyType);
    form.setFieldsValue({
      rate: [{}]
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
        <div style={{ display: strategyType === "rate" ? 'block' : 'none' }}>
          <Form.List name="rate" >
            {(fields, { add, remove }) => (
              <>
                {fields && fields.map(field => (
                  <Row key={field.key} align="baseline">
                    <Col span={5}>
                      <Form.Item
                        {...field}
                        label="比例"
                        name={[field.name, 'rate']}
                        fieldKey={[field.fieldKey, 'rate']}
                        rules={[{ required: strategyType === "rate", message: '请填写配置比例', pattern: /^[0-9]+$/ }]}
                      >
                        <InputNumber
                          min={0}
                          max={100}
                          formatter={value => `${value}%`}
                        />
                      </Form.Item>
                    </Col>
                    <Col span={18}>
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
                              { required: strategyType === "rate", message: '请填写链接' },
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
