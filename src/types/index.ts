export type PositionType =
    | "top-center"
    | "top-right"
    | "top-left"
    | "bottom-center"
    | "bottom-right"
    | "bottom-left";

export type ActionType = "info" | "success" | "warning" | "error";
export type DurationType = 3 | 5 | 8 | 10;

export interface ToastProps {
    open: boolean;
    message: string;
    duration?: DurationType;
    position?: PositionType;
    action: ActionType;
    multiple?: boolean;
}

export interface ToastMessageProps {
    action: ActionType;
    message: string;
    onClose: () => void;
    toastActionClassName: string;
    toastBtnActionClassName: string;
}
