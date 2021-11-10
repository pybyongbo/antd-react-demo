import React from 'react';
import CourseItem from './listItem';
import { getCourseFieldList } from '../../services/index.js'
import { filterData } from '../../utils';
import './index.less'
export default class CourseList extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      listData: []
    }

  }
  componentDidMount() {
    const { curField = -1 } = this.props;
    this.getFieldListData(curField);
  }

  getFieldListData = async (curField) => {
    const { result } = await getCourseFieldList(curField);
    this.setState({
      listData: result
    })
  }

  render() {
    const { listData } = this.state;
    const { curField } = this.props;
    return (
      <div className="field-wrapper">
        <ul className="course-list">
          {
            filterData(listData, curField).map((item, index) => {
              return (
                <CourseItem
                  key={index}
                  item={item}
                />
              )
            })
          }
        </ul>
      </div>
    )
  }
}
