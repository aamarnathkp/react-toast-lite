import { PositionType, ActionType } from "../types";

export const getClassNames = (
    position: PositionType = "top-center",
    action: ActionType = "info"
) => {
    const posClassName = `toast-comp-container-${position}`;
    const toastActionClassName = `toast-action-${action}`;
    const toastBtnActionClassName = `toast-btn-action-${action}`;

    return { posClassName, toastActionClassName, toastBtnActionClassName };
};
