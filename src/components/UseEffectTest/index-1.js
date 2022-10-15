import React, { useEffect, useLayoutEffect, useRef, useState } from 'react';
// import useDeepCompareEffect from 'use-deep-compare-effect';
import { Button } from 'antd';




const ClickCount = () => {

  const [count, setCount] = useState(0);

  useEffect(() => {
    // console.log('test');
    const id = setInterval(() => {
      setCount(count + 1)
    }, 1000);

    return () => clearInterval(id);

  }, [])


  return (
    <div>
      <h2>{count}</h2>

    </div>
  )
}


export default ClickCount;