import React, {
  forwardRef,
  Fragment,
  useEffect,
  useImperativeHandle
} from "react";
import { Form, Input } from "antd";

const TagForm = forwardRef((props, tagFormRef) => {
  const [form] = Form.useForm();

  const { strategyType, getModifiyData, cindex } = props;

  useEffect(() => {

    console.log('result 1', strategyType)

  }, [form, strategyType]);

  useImperativeHandle(tagFormRef, () => ({
    getAllVales: () => {
      return form.getFieldsValue();
    },
    validataallform: async () => {
      const result = await form.validateFields();
      return result;
    }
  }));

  const validateUrl = (rule, val, callback) => {
    if (!val) {
      return Promise.resolve()
    }
    let validateReg = /^(ht|f)tps?:\/\/(([a-zA-Z0-9_-])+(\.)?)*(:\d+)?(\/((\.)?(\?)?=?&?([a-zA-Z0-9_-]|#|%)(\?)?)*)*$/i;  // 自定义规则
    if (!validateReg.test(val)) {
      return Promise.reject('请输入正确的网址！');
    }
    return Promise.resolve();
  }

  const handleValuesChange = (changedValues, allValues) => {

    // 表单值更新,将值传递到外层父组件进行处理.(编辑的时候),新增的时候,channel为空.
    getModifiyData && getModifiyData(allValues, cindex || 0);
  }

  return (
    <Fragment >
      <Form
        form={form}
        onValuesChange={handleValuesChange}
        style={strategyType === "all" ? { display: 'block' } : { display: 'none' }}
      >
        <Form.Item
          label="链接"
          name="url"
          rules={[
            { required: strategyType === "all", message: '请填写链接' },
            {
              validator: validateUrl
            }
            // {
            //   min: 1,
            //   max: 1000,
            //   message: '不可超过1000字'
            // },
            // {
            //   pattern: /^(ht|f)tps?:\/\/(([a-zA-Z0-9_-])+(\.)?)*(:\d+)?(\/((\.)?(\?)?=?&?([a-zA-Z0-9_-]|#|%)(\?)?)*)*$/i,
            //   message: '请输入有效网址！'
            // }
          ]}
        >
          <Input />
        </Form.Item>
      </Form>
    </Fragment>
  );
});
export default TagForm;
