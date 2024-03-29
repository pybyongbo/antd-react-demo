import React, {
  forwardRef,
  Fragment,
  useEffect,
  useImperativeHandle
} from "react";
import { connect } from 'react-redux';
import { Form, Input } from "antd";

const TagForm = (props) => {
  const [form] = Form.useForm();
  const { editItem, handleModalCancel, setTabData, refInstance } = props;
  useEffect(() => {
    // console.log('props', props);
    console.log('som', editItem)
    editItem &&
      form.setFieldsValue({
        tagName: editItem.content
      });
  }, [editItem, form]);

  // useImperativeHandle(tagFormRef, () => ({
  useImperativeHandle(refInstance, () => ({
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
  // });
}
// export default TagForm;
// export default forwardRef(TagForm);

const mapStateToProps = state => ({
  ...state
});

const mapDispatchToProps = dispatch => ({ dispatch });

const TagFormConnect = connect(mapStateToProps, mapDispatchToProps)(TagForm);



const TagFormConnectRef = forwardRef((props, ref) => <TagFormConnect  {...props} refInstance={ref} />);

export default TagFormConnectRef;





