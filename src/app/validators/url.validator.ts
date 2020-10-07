import { AbstractControl } from '@angular/forms';

export function ValidateUrl(control: AbstractControl) {
    if (!control.value.includes("@") || !control.value.includes(".com") || control.value.includes("muyoc.com")) {
        return {validUrl: true};
    }
    return null;
}