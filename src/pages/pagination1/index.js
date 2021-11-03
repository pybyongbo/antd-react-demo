/* eslint-disable no-unused-vars */
import React, { Fragment, useEffect, useState } from "react";
import { Table } from "antd";
import { connect } from 'react-redux';

import { getArtileList } from '../../store/actions';

function PageinationTest(props) {

  useEffect(() => {
    const { dispatch } = props;
    dispatch(getArtileList({ page: 2 })).then(res => {
      // console.log('result',res);
    });

  }, []);

  console.log('result props', props);
  const { artileList } = props;
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
      title: '内容',
      dataIndex: 'content',
      key: 'content',
      render: text => {
        return <div dangerouslySetInnerHTML={{ __html: text }}></div>
      }
    }
  ]


  return (
    <div>
      <h2>接口分页测试1</h2>

      <Table
        rowKey="id"
        columns={columns}
        dataSource={artileList}
      />
    </div>

  )


}


// export default PageinationTest;

const mapStateToProps = state => ({
  ...state
});

const mapDispatchToProps = dispatch => ({ dispatch });

export default connect(mapStateToProps, mapDispatchToProps)(PageinationTest);