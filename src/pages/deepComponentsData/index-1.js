/* eslint-disable react/react-in-jsx-scope */
// import React from 'react';
// import myContext from './createContext'

// import Child from './child';
// const Parent = () => {
//   return (
//     // eslint-disable-next-line react/react-in-jsx-scope
//     <div>
//       <span>我是顶层父元素</span>
//       <myContext.Provider value={{ industryList: [1, 2, 3] }}>
//         <Child />
//       </myContext.Provider>
//     </div>
//   )
// }

// export default Parent;


import React, { useState } from "react";

const Example = () => {
  return <Parent />
}

const Parent = () => {
  const [usename, setUsername] = useState("liuyi");
  return (
    <div>
      <h1>父组件</h1>
      您好,{usename}
      <Child setUsername={setUsername} />
    </div>
  )
}

const Child = ({ setUsername }) => {
  return (
    <div>
      <h2>子组件</h2>
      <GrandChild setUsername={setUsername} />
    </div>
  )
}

const GrandChild = ({ setUsername }) => {
  return (
    <div>
      <h3>孙组件</h3>
      <button
        onClick={() => {
          setUsername("xiaobai");
        }}
      >
        修改用户名
      </button>
    </div>
  )
}


export default Example;