import React, { useEffect, useState } from "react";
import ToastMessage from "./ToastMessage";
import { getClassNames } from "../utils";
import { ToastProps } from "../types";

import "../styles/styles.css";

const Toast = ({
    action,
    message,
    open = false,
    position,
    duration = 5,
}: ToastProps) => {
    const [isOpen, setIsOpen] = useState(false);
    const { posClassName, toastActionClassName, toastBtnActionClassName } =
        getClassNames(position, action);

    useEffect(() => {
        let timer: any;
        if (open) {
            setIsOpen(true);
            timer = setTimeout(() => {
                setIsOpen(false);
            }, duration * 1000);
        }
        return () => {
            clearTimeout(timer);
        };
    }, [open]);

    const onToastCloseHandler = () => {
        isOpen && setIsOpen(false);
    };

    return (
        <div className={`toast-comp-container ${posClassName}`}>
            {isOpen && (
                <ToastMessage
                    action={action}
                    message={message}
                    onClose={onToastCloseHandler}
                    toastActionClassName={toastActionClassName}
                    toastBtnActionClassName={toastBtnActionClassName}
                />
            )}
        </div>
    );
};

export default Toast;
