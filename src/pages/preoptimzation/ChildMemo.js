import React, { memo } from 'react';

const isEqual = (prevProps, nextProps) => {
  if (prevProps.number !== nextProps.number) {
    // console.log('result', 111);
    // 返回false,会render该组件
    return false;
  }

  // 返回true,不会render该组件
  return true;
}

export default memo((props = {}) => {
  console.log(`--- memo re-render ---`);
  return (
    <div>
      {/* <p>step is : {props.step}</p> */}
      {/* <p>count is : {props.count}</p> */}
      <p>number is : {props.number}</p>
    </div>
  );
}, isEqual);