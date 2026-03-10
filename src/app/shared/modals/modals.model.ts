export interface ModalsModel {
    icon: "success" | "info" | "error" | "question" | "warning";
    title?: string;
    text?: string;
    htmlMessage?: string;
    confirmButtonText?: string;
    cancelButtonText?: string;
    onBack: () => void;
    onSuccess: () => void;
}