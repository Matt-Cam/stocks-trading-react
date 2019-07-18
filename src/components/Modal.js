import ReactDOM from 'react-dom'
import React from 'react';

const Modal = (props) => {
    const classNames = ["modal"];
    if (props.isVisible) {
        classNames.push("visible");
    }

    return (
        ReactDOM.createPortal(
            <div className={classNames.join(' ')}>
                <div className="modal__overlay"  onClick={props.closeCallback}></div>
                <div className="modal__content">
                    <div className="modal__close" onClick={props.closeCallback}>x</div>
                    {props.children}
                </div>
            </div>
            , document.body)
    );
};
export default Modal;