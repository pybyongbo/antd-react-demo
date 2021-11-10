/* eslint-disable no-script-url */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';


export default class FieldItem extends React.Component {

  render() {
    const { item, totalCount, curField, changeCourseField } = this.props;
    return (
      <div className="nav-item">
        <a
          className={['nav-lk', item.fieldType === curField ? 'nav-current' : ''].join(' ')}
          // style={{ marginRight: 10 }}
          onClick={() => changeCourseField(item.fieldType)}

        >{item.fieldName}-({totalCount})</a>
      </div>

    )
  }

}