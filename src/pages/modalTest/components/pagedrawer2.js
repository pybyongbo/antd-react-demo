import React, {

  Fragment,
  useEffect,

} from "react";
import { Form, Input, InputNumber, } from "antd";
// import { DeleteOutlined } from '@ant-design/icons';

const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  },
}
const DrawerFormOther = (props) => {
  const [otherdrawerform] = Form.useForm();
  // const { strategyType, getModifiyData, cindex } = props;
  useEffect(() => {

  }, []);

  const onFinish = (values) => {
    // console.log('Success:', values);
    values && props.onHandleSubmit(values);
  };
  return (
    <Fragment>
      <Form
        form={otherdrawerform}
        onFinish={onFinish}
        // name="otherdrawerform"
        {...layout}
        id="otherdrawerform"
      >
        <Form.Item
          label="age"
          name="age"
          rules={[
            {
              required: true,
              message: 'Please input your age!',
            },
          ]}
        >
          <InputNumber />
        </Form.Item>

        <Form.Item
          label="password"
          name="password"
          rules={[
            {
              required: true,
              message: 'Please input your password!',
            },
          ]}
        >
          <Input.Password />
        </Form.Item>
      </Form>
    </Fragment>
  );
};
export default DrawerFormOther;
