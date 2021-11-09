import React from 'react';

import FieldItem from './fieldItem';
import { getCourseField } from '../../services/index.js'
import './index.less'
export default class FieldNav extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      fieldData: []
    }

  }
  componentDidMount() {

    this.getFieldData();
  }

  getFieldData = async () => {
    const { result } = await getCourseField();
    console.log('result 110', result)
    this.setState({
      fieldData: result
    })
  }

  render() {
    const { fieldData } = this.state;
    const { curField, changeCourseField } = this.props;
    console.log('111',this.props)
    return (
      <div className="field-wrapper nav-bar">
        <FieldItem
          key={-1}
          item={{ fieldType: -1, fieldName: '全部课程' }}
          curField={curField}
          changeCourseField={() => changeCourseField(-1)} />

        {
          fieldData.map((item, index) => {
            return (
              <FieldItem
                key={index}
                item={item}
                curField={curField}
                changeCourseField={() => changeCourseField(item.fieldType)}
              />)
          })
        }

      </div>
    )
  }

}
