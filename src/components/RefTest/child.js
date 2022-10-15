import React, { useState, useEffect, useRef, forwardRef, useImperativeHandle } from 'react';

const CountExample = forwardRef((props, chRef) => {
  const [count, setCount] = useState(0);

  const prevCountRef = useRef(false);
  useEffect(() => {
    if (prevCountRef.current) {
      console.log('只在更新时候执行, 可以在这里加逻辑');
    } else {
      prevCountRef.current = true;
    }
  });

  useImperativeHandle(chRef, () => ({
    getChildFn: () => {
      setCount(100)
      return 'child test';
    },

  })
  )

  return (

    <h3 style={{ width: '100%' }}>
      {count}
    </h3>
  )
})

export default CountExample;