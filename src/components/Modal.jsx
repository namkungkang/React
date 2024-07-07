import React, { useState } from "react"
import './Modal.css';


function Modal() {
    const [open,setOpen] = useState(false);

    const openModal = () => {
        setOpen(true);
    }

    const closeModal = () => {
        setOpen(false);
    }

    return(
        <div>
        <button className='openModal' onClick={openModal}>버튼 열기</button>
       {open && (
        <div className="modal-overlay">
         <div className="modal-box">
            <p id="title">안녕하세요</p>
            <p id="content">모달 내용은 어쩌고 저쩌고..</p>
            <button className="close" onClick={closeModal}>닫기</button>
        </div>
        </div>
       )}
         </div>

)}

export default Modal;