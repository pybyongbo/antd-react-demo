import React from 'react';
import FieldItem from './fieldItem';
import { getCourseField } from '../../services/index.js';
import './index.less'
export default class FieldNav extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      fieldData: [],
    }

  }
  componentDidMount() {
    this.getFieldData();
  }

  getFieldData = async () => {
    const { result } = await getCourseField();
    this.setState({
      fieldData: result
    })
  }

  getSum = (data) => {
    return data.reduce((acc, cur) => {
      return acc + cur.totalCount
    }, 0);
  }

  render() {
    const { fieldData } = this.state;
    const { curField, changeCourseField } = this.props;
    return (
      <div className="field-wrapper nav-bar">
        <FieldItem
          key={-1}
          item={{ fieldType: -1, fieldName: '全部课程' }}
          totalCount={this.getSum(fieldData)}
          curField={curField}
          changeCourseField={() => changeCourseField(-1)} />

        {
          fieldData.map((item, index) => {
            return (
              <FieldItem
                key={index}
                item={item}
                totalCount={item.totalCount}
                curField={curField}
                changeCourseField={() => changeCourseField(item.fieldType)}
              />)
          })
        }

      </div>
    )
  }
}
