import React, {
  forwardRef,
  Fragment,
  useEffect,
  useImperativeHandle
} from "react";
import { Form, Input } from "antd";

const TagForm = ({ visible, editItem, handleModalCancel, onSuccess, setTabData }, tagFormRef) => {
  const [form] = Form.useForm();

  useEffect(() => {
    console.log('som', editItem)
    editItem &&
      form.setFieldsValue({
        tagName: editItem.content
      });
  }, [editItem, form]);

  useImperativeHandle(tagFormRef, () => ({
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
};
export default forwardRef(TagForm);
