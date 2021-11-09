/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';


export default class FieldItem extends React.Component {

  render() {
    const { item } = this.props;
    return (
      <li className="course-item">
        <div className="cover">
          <a className="course-lk">
            <img src={item.thumb} alt={item.title} className="cover-img" />
          </a>
        </div>
        <h1 className="course-tt">
          <a className="course-lk">
            {item.title}
          </a>
        </h1>
        <div className={['price', item.price === 0 ? 'free' : ''].join(" ")}>
          {item.price === 0 ? '免费' : `￥${item.price}.00`}
        </div>
        <div className="studyNum">{item.studying}人在学习</div>
      </li >
    )
  }

}