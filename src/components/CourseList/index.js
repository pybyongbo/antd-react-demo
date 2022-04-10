import React from 'react';
import { Empty } from 'antd';
import CourseItem from './listItem';
// import { getCourseFieldList } from '../../services/index.js';
import { filterData } from '../../utils';
import './index.less';
export default class CourseList extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      listData: []
    }

  }
  // componentDidMount() {
  //   const { curField = -1 } = this.props;
  //   this.getFieldListData(curField);
  // }


  render() {
    // const { listData } = this.state;
    const { curField, listData } = this.props;
    console.log('result listData', listData);

    return (
      <div className="field-wrapper">
        <ul className="course-list">
          {/* {
           
              filterData(listData , curField).map((item, index) => {
                return (
                  <CourseItem
                    key={index}
                    item={item}
                  />
                )
              })
          } */}
          {

            listData && listData.length > 0 ? filterData(listData, curField).map((item, index) => {
              return (
                <CourseItem
                  key={index}
                  item={item}
                />
              )
            })
              :
              <Empty style={{ marginTop: 30 }} description="没有搜索到相关数据" />
          }
        </ul>
      </div>
    )
  }
}
