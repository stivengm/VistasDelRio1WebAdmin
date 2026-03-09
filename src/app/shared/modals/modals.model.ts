export interface ModalsModel {
    title?: string;
    text?: string;
    htmlMessage?: string;
    confirmButtonText?: string;
    cancelButtonText?: string;
    onBack: () => void;
    onSuccess: () => void;
}