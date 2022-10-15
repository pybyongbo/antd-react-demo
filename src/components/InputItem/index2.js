import React, {
  forwardRef,
  Fragment,
  useEffect,
  useImperativeHandle
} from "react";
import { connect } from 'react-redux';
import { Form, Input } from "antd";


const TagForm = forwardRef((props, formRef) => {
  const [form] = Form.useForm();
  const { editItem, handleModalCancel, setTabData } = props;
  useEffect(() => {

    // console.log('som', editItem)
    editItem &&
      form.setFieldsValue({
        tagName: editItem.content
      });
  }, [editItem, form]);

  useImperativeHandle(formRef, () => ({
    submit: () => {
      const inputVal = form.getFieldValue("tagName");
      inputVal && setTabData({
        id: editItem && editItem.id ? editItem.id : new Date().getTime(),
        content: inputVal
      });
      handleModalCancel();
      form.setFieldsValue({
        tagName: null
      });
    }
  }));

  return (
    <Fragment>
      <Form
        form={form}
      >
        <Form.Item label={`标签名称`} name="tagName">
          <Input />
        </Form.Item>
      </Form>
    </Fragment>
  );
});






export default TagForm;

