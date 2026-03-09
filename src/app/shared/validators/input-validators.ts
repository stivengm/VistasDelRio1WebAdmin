import { AbstractControl } from "@angular/forms";

export function validEmail(control: AbstractControl): { [key: string]: any } | null {
    if (!control.value) {
        return null;
    }

    const maxLength = 50;
    const emailPattern = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/;
    const especialCharsRegex = /[?¿!¡()#$%&/|\\\,;"':°*{}´+<>[\]¨=¬^`~]/g;

    const value = control.value.toString();

    if (value.length > maxLength) {
        control.setValue(value.substring(0, maxLength));
    }

    if (especialCharsRegex.test(value)) {
        const cleanValue = value.replace(especialCharsRegex, '');
        control.setValue(cleanValue, '');
    }

    if (value) {
        if (!emailPattern.test(value)) {
            return { 'invalidEmail': true };
        }
    }

    return null;
}