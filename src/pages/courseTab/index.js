/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { connect } from 'react-redux';
import CourseField from '../../components/CourseField';
import CourseList from '../../components/CourseList';
import { getCourseField, getCourseFieldList } from '../../services/index.js';
import { changeCourseField } from '../../store/actions.js';

import { Spin } from 'antd';
class CourseListTab extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      loading: true
    }
  }

  componentDidMount() {
    this.pageLoading();
  }

  // 设置页面loading状态
  pageLoading = async () => {
    let pCourseField = await getCourseField();
    let pCourseFieldList = await getCourseFieldList(-1);
    Promise.all([pCourseField, pCourseFieldList]).then(res => {
      this.setState({
        loading: false
      })
    })

  }


  render() {

    const { curField, changeCourseField } = this.props;

    return (
      <div className="App">
        <h1>React+Redux+Antd实现课程列表:</h1>
        {/* <h2>react-redux原生API版</h2> */}
        <br />
        <Spin spinning={this.state.loading}>
          <CourseField
            curField={curField}
            changeCourseField={changeCourseField} />

          <CourseList
            curField={curField}
          />
        </Spin>
      </div>
    );

  }
}


export default connect(

  function mapStateToProps(state) {
    return {
      curField: state.courseList.curField
    }
  },

  function mapDispatchToProps(dispatch) {
    return {
      changeCourseField: (field) => dispatch(changeCourseField(field))
    }
  }

)(CourseListTab)