import React, { useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import './modal.css';
// https://segmentfault.com/a/1190000021637545
const Modal = (props) => {
  const { children, visible, closeModal } = props;

  const bodyOverflow = useRef(window.getComputedStyle(document.body).overflow);

  useEffect(() => {
    if (visible) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = bodyOverflow.current;
    }
  },[visible])

  function handleClick(event) {
    // 点击蒙层本身时关闭模态框，点击模态框的内容时不关闭
    if (event.target === event.currentTarget) {
      closeModal();
    }
  }

  const modal = createPortal(
    <div className="modal" onClick={handleClick}>
      {children}
    </div>,
    document.body
  );

  return <div>{visible && modal}</div>;
};

export default React.memo(Modal);