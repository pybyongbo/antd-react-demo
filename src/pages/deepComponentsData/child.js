import React, { useContext } from 'react';
import myContext from "./createContext";

const ChildCom = () => {
  const { industryList } = useContext(myContext);
  return (
    <div>
      我是子元素(也可是子的子元素)
      {industryList}
    </div>
  )
}

export default ChildCom;