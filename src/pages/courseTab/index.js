/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { connect } from 'react-redux';

import CourseField from '../../components/CourseField';

import CourseList from '../../components/CourseList';

import { changeCourseField } from '../../store/actions.js';
// import { Input, Row, Col, List, Button, Tag, Empty, Checkbox, Radio } from 'antd';


class CourseListTab extends React.Component {

  constructor(props) {
    super(props);
    this.state = {

    }
  }

  // componentDidMount(){

  // }

  // const 

  render() {

    // console.log('props', this.props);

    const { curField, changeCourseField } = this.props;

    return (
      <div className="App">
        <h1>React+Redux+Antd实现课程列表:</h1>
        {/* <h2>react-redux原生API版</h2> */}
        <br />

        <CourseField
          curField={curField}
          changeCourseField={changeCourseField} />

        <CourseList 
        curField={curField} 
        />
      </div>
    );

  }
}


export default connect(

  function mapStateToProps(state) {
    // debugger
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