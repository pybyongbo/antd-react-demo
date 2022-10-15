import React, {

  Fragment,
  useEffect,

} from "react";
import { Form, Input, } from "antd";
// import { DeleteOutlined } from '@ant-design/icons';

const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  },
}
const DrawerForm = (props) => {
  const [drawerform] = Form.useForm();
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
        form={drawerform}
        onFinish={onFinish}
        name="drawerform"
        {...layout}
        // id="drawerform"
      >
        <Form.Item
          label="Username"
          name="username"
          rules={[
            {
              required: true,
              message: 'Please input your username!',
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="email"
          name="email"
          rules={[
            {
              required: true,
              message: 'Please input your email!',
            },
          ]}
        >
          <Input />
        </Form.Item>
      </Form>
    </Fragment>
  );
};
export default DrawerForm;
