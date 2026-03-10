import Swal from "sweetalert2";
import { ModalsModel } from "./modals.model";

export function modalError(modal: ModalsModel) {
    return Swal.fire({
        icon: modal.icon,
        title: modal.title,
        text: modal.text,
        html: modal.htmlMessage,
        reverseButtons: true,
        showConfirmButton: !!modal.confirmButtonText,
        confirmButtonText: modal.confirmButtonText,

        showCancelButton: !!modal.cancelButtonText,
        cancelButtonText: modal.cancelButtonText
    }).then((resp) => {
        if (resp.isConfirmed) modal.onSuccess();
        if (!resp.isConfirmed) modal.onBack();
    });
}

export function modalInfo() {

}