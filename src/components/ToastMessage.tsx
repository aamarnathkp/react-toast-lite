import React from "react";
import { ToastMessageProps } from "../types";

import "../styles/styles.css";

const ToastMessage = ({
    message,
    onClose,
    toastActionClassName,
    toastBtnActionClassName,
}: ToastMessageProps) => {
    return (
        <div className={`toast-comp-message ${toastActionClassName}`}>
            <p>{message}</p>
            <button
                onClick={onClose}
                className={`toast-comp-button ${toastBtnActionClassName}`}>
                X
            </button>
        </div>
    );
};

export default ToastMessage;
