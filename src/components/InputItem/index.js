import React, {
  forwardRef,
  Fragment,
  useEffect,
  useImperativeHandle
} from "react";
import { connect } from 'react-redux';
import { Form, Input } from "antd";

const TagForm = forwardRef(({ visible, editItem, handleModalCancel, onSuccess, setTabData, refInstance }, tagFormRef) => {
  const [form] = Form.useForm();

  useEffect(() => {
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
});
// export default TagForm;
// export default forwardRef(TagForm);

const mapStateToProps = state => ({
  ...state
});

const mapDispatchToProps = dispatch => ({ dispatch });

// export default connect((state) => {
//   return {
//     list: state.list,
//   }
// }, null, null, { withRef: true })(TagForm);

// const ConnectedMyComponent = connect(mapStateToProps,mapDispatchToProps)(TagForm)

// export default forwardRef((props, ref) =>
//   <ConnectedMyComponent {...props} refInstance={ref} />
// );


const TagFormConnectRef = forwardRef((props, ref) => <TagForm  {...props} refInstance={ref} />);

export default TagFormConnectRef;


// export default connect(mapStateToProps,mapDispatchToProps,null,{forwardRef: true})(TagForm);
