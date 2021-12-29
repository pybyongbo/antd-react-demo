/* eslint-disable no-dupe-keys */
import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { Modal, Table } from 'antd';
import { getNewsListByParams } from '../../store/actions';
import { uniqBy } from 'lodash';
const DialogSelectNews = props => {

  // const [selectedRows, setSelectedRows] = useState([]);
  // const [selectedRowKeys, setSelectedRowKeys] = useState([]);
  const [selectedRowKeys, setSelectedRowKeys] = useState([]);
  const [selectedRowsData, setSelectedRows] = useState([]);

  const {
    groupList,
    selectDiaVisible,
    handleDialoghide,
    onRadioChange,
    // loading,
    // pagination,
    // cusgroupListArr
  } = props;

  useEffect(() => {

    // 选择客群集合
    setSelectedRowKeys([].concat(groupList));

  }, [groupList, selectDiaVisible]);

  const { todolist: { newsList, total, loading } } = props;

  // console.log('111', props);

  const onChange = (page, pageSize) => {

    props.dispatch(getNewsListByParams({ page, pageSize }));


  }

  // const onShowSizeChange = (current, size) => {
  //   props.dispatch(getNewsListByParams({ pageSize: size }));
  // }

  const columns = [
    {
      title: 'ID',
      dataIndex: 'id',
      key: 'id',
    },
    {
      title: '标题',
      dataIndex: 'title',
      key: 'title',
    },
    {
      title: '描述',
      dataIndex: 'description',
      key: 'description',

    }
  ];

  // const onSelectChange = (selectedRowKeys, selectedRows) => {
  //   console.log('cusgroupListArr2', selectedRowKeys, selectedRows)
  //   setSelectedRowKeys(selectedRowKeys);
  //   // setCitem(selectedRows);
  //   onRadioChange(selectedRows);
  // };


  const onSelect = (record, selected, selectedRows) => {
    // debugger
    console.log('result selectedRows', record, selected, selectedRows);
    const id = record.id;
    if (selected) {

      setSelectedRows(selectedRowsData.concat([record]));
      setSelectedRowKeys(selectedRowKeys.concat([id]).filter(Boolean));

    } else {
      console.log('result selectedRows', selectedRowKeys.filter((item) => {
        return item !== id
      }));
      setSelectedRows(selectedRowsData.filter((item) => {
        return item && (item.id !== id);
      }));
      setSelectedRowKeys(selectedRowKeys.filter((item) => {
        return item !== id;
      }).filter(Boolean))
    }

    onRadioChange(selectedRows.filter(Boolean));


  }
  const onSelectAll = (selected, sRows, cRows) => {
    console.log('selected, selectedRows, changeRows', selected, sRows, cRows)
    const tmparr = [];
    for (let i = 0; i < cRows.length; i++) {
      tmparr.push(cRows[i].id);
    }
    const AllRows = sRows.filter(Boolean).map(item => { return item });
    const AllIds = sRows.filter(Boolean).map(item => { return item.id });


    if (selected) { // 全选操作
      setSelectedRows(uniqBy(selectedRowsData.concat(AllRows), 'id'));
      // setSelectedRowKeys(AllIds);
      setSelectedRowKeys(Array.from(new Set(selectedRowKeys.concat(AllIds))));

    } else {

      let cIds = new Set(tmparr);
      let sIds = new Set(selectedRowKeys);
      setSelectedRows(
        [...selectedRowsData].filter((x) => [...cRows].every((y) => y.id !== x.id))
      );
      setSelectedRowKeys(Array.from(new Set([...sIds].filter((x) => !cIds.has(x)))));

    }

    onRadioChange(AllRows.filter(Boolean));
  }


  const handleOk = () => {
    props.setCustomerGroupVal(selectedRowKeys.filter(Boolean));
  }

  return (
    <Modal
      title="请选择"
      visible={selectDiaVisible}
      onCancel={handleDialoghide}
      onOk={handleOk}
      // bodyStyle={{ padding: '30px 60px 10px 40px' }}
      centered={true}
      destroyOnClose={true}
      width={880}
      maskClosable={false}
      wrapClassName={"pushconfigdialog"}
    >

      <Table
        rowKey='id'
        rowSelection={{
          type: 'checkbox',
          // onChange: onSelectChange,
          onSelect: onSelect,
          onSelectAll: onSelectAll,
          selectedRowKeys: selectedRowKeys
        }}
        style={{ width: '100%' }}
        preserveSelectedRowKeys={true}
        className="customer-list-nested push-config-page"
        loading={loading}
        columns={columns}
        dataSource={newsList || []}
        pagination={{
          total: total,
          pageSize: 5,
          showSizeChanger: true,
          onChange: onChange,
          // pageSizeOptions: [5, 10],
          showSizeChanger: false
          // onShowSizeChange: onShowSizeChange
        }}

      />

    </Modal >
  )

}

// export default DialogSelectNews;
const mapStateToProps = state => ({
  ...state
});

const mapDispatchToProps = dispatch => ({ dispatch });

export default connect(mapStateToProps, mapDispatchToProps)(DialogSelectNews);