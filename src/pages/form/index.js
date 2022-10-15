// import React from 'react';

import React, { useEffect, Fragment, useRef, useState } from "react";
import { Modal, Button, Table, Divider, ConfigProvider } from "antd";
import zhCN from 'antd/lib/locale-provider/zh_CN';
import TagForm from '../../components/InputItem/index.js';
// import TagForm from '../../components/InputItem/index2.js';

// import styles from './index.less'

import * as data from '../../utils/module.js';




const Tag = (props) => {
  const [loading, setLoading] = useState(false);
  const [rows, setRows] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [editItem, setEditItem] = useState({});
  const formRef = useRef(null);
  console.log('formRef init', formRef);

  useEffect(() => {
    console.log('result', data);
  }, [])

  const handleShowModal = (record) => {
    setEditItem(record);
    setModalVisible(true);
    // console.log('result', record);
  };

  const handleModalCancel = () => {
    setModalVisible(false);
    setEditItem({});
  };

  const handleDelete = (record) => {
    Modal.confirm({
      title: "确定删除?",
      content: "删除标签",
      onOk() {
        const list = rows.filter((item) => {
          return item.id !== record.id;
        });
        setRows(list);
      },
      onCancel() {
        handleModalCancel()
      }
    });
  };

  const handleModalOK = () => {
    console.log(formRef)
    formRef.current.submit();
    console.log('result', rows)
  };
  const setTabData = (val) => {

    const itemIndex = rows.findIndex(item => item.id === val.id);
    console.log('result', itemIndex);

    if (itemIndex > -1) { // 如果找到啦.就更新值
      rows[itemIndex].content = val.content
      setRows(rows);
    } else {  //新增值
      setRows(rows.concat([val]));
    }

  };
  const columns = [
    {
      title: "名称",
      dataIndex: "content",
      key: "content"
    },
    {
      title: "操作",
      key: "id",
      width: 200,
      render: (text, record) => (
        <div>
          <span onClick={() => handleShowModal(record)}>编辑</span>
          <Divider type="vertical" />
          <span onClick={() => handleDelete(record)}>删除</span>
        </div>
      )
    }
  ];

  const titleEl = (
    <div>
      <Button type={`primary`} onClick={() => handleShowModal(null)}>
        新增标签
      </Button>
    </div>
  );

  return (
    <Fragment>
      <h2 style={{ marginTop: 30, width: '100%' }}>react hooks写法中 父组件调用子组件中的方法</h2>
      <Table
        className="addTags"
        rowKey={`id`}
        title={() => titleEl}
        columns={columns}
        dataSource={rows}
        loading={loading}
        pagination={false}
      />
      <ConfigProvider locale={zhCN}>
        <Modal
          forceRender
          destroyOnClose={true}
          visible={modalVisible}
          title={editItem && editItem.id ? `修改` : `新增`}
          onOk={handleModalOK}
          onCancel={handleModalCancel}
        >
          <TagForm
            ref={formRef}
            editItem={editItem}
            setTabData={setTabData}
            handleModalCancel={handleModalCancel}
          />
        </Modal>
      </ConfigProvider>
    </Fragment>
  );
};


export default Tag;
