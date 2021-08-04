import React from "react";
import "../../css/modal.css";

function Modal({ active, setActive, title, children }) {
    return (
        <div className={active ? "modal active" : "modal"} onClick={() => setActive(!active)}>


            <div className="modal_content" onClick={e => e.stopPropagation()}>
                <div className="modal-header">
                    <div className="modal-header_title">
                        {title}
                    </div>
                    <div className="modal-header_close-btn" id="modal-header_close-btn" onClick={() => setActive(!active)}>
                        <i className="far fa-times-circle"></i>
                    </div>
                </div>
                {children}
            </div>
        </div>
    );
}

export default Modal;
