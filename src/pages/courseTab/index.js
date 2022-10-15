/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { connect } from 'react-redux';
import CourseField from '../../components/CourseField';
import CourseList from '../../components/CourseList';
// import { getCourseField, getCourseFieldList, getCourseFieldListByKeyWords } from '../../services/index.js';
import { changeCourseField, searchByKeyWords, getCourseFieldListData } from '../../store/actions.js';

import { Spin, Input, } from 'antd';
const { Search } = Input;
class CourseListTab extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      loading: true,
    }
  }

  async componentDidMount() {
    this.getDefaultData();
    console.log('result props', this.props)
  }

  // 设置页面loading状态
  getDefaultData = () => {
    // let pCourseField = await getCourseField();
    // let pCourseFieldList = await this.props.getCourseListData(-1);
    // Promise.all([pCourseField, pCourseFieldList]).then(res => {
    //   this.setState({
    //     loading: false
    //   })
    // })

    this.props.getCourseListData({
      field: -1,
      page: 1,
      pageSize: 50
    }).then(res => {
      this.setState({
        loading: false
      })
    })

  }



  render() {

    const { curField, listData, changeCourseField, searchByKewWords } = this.props;

    return (
      <div className="App">
        <h1>React+Redux+Antd实现课程列表:</h1>
        <h2 style={{ color: 'red', fontSize: 18 }}>需要开启本地后端服务才能看到效果</h2>

        <Search placeholder="请输入关键词进行搜索" onSearch={(val) => searchByKewWords({ val, page: 1, pageSize: 50 })} allowClear style={{ width: 520 }} />
        <br /><br />
        <Spin spinning={this.state.loading}>
          <CourseField
            curField={curField}
            changeCourseField={changeCourseField}
          />

          <CourseList
            curField={curField}
            listData={listData}
          />
        </Spin>
      </div>
    );

  }
}


export default connect(

  function mapStateToProps(state) {
    return {
      curField: state.courseList.curField,
      page: state.courseList.page,
      pageSize: state.courseList.pageSize,
      listData: state.courseList.listData
    }
  },

  function mapDispatchToProps(dispatch) {
    return {
      changeCourseField: (field) => dispatch(changeCourseField(field)),
      searchByKewWords: ({ val, page, pageSize }) => dispatch(searchByKeyWords({ val, page, pageSize })),
      getCourseListData: ({ field, page, pageSize }) => {
        // console.log('field, page, pageSize 222', field, page, pageSize);
        return dispatch(getCourseFieldListData({ field, page, pageSize }))
      }

    }
  }

)(CourseListTab)