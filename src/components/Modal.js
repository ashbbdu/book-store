import React, { useRef } from "react";
import useOnClickOutside from "../hooks/useOnClickOutside";

const Modal = ({ open , deleteHandler , setOpen, text , confirmText , cancelText  }) => {
    const ref = useRef()
    useOnClickOutside(ref, () => setOpen(false));
  return open ? (
    <div className="ash" >
    <div className="custom-modal" onClick={(e) => e.stopPropagation()} ref={ref}>
      <div className="modal-text">{text}</div>
     <div className="modal-action-button">
     <button className="btn btn-danger" onClick={() => deleteHandler()}>{confirmText}</button>
      <button className="btn btn-secondary gap-2" onClick={() => setOpen(!open)}>{cancelText}</button>
     </div>
    </div>
    </div>
  ) : (
    ""
  );
};

export default Modal;