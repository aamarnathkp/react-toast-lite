import { PositionType, ActionType } from "../types";

export const getClassNames = (
    position: PositionType = "top-center",
    action: ActionType = "info"
) => {
    const posClassName = `toast-pos-${position}`;
    const toastActionClassName = `toast-comp-message-${action}`;
    const toastBtnActionClassName = `toast-comp-button-${action}`;

    return { posClassName, toastActionClassName, toastBtnActionClassName };
};
