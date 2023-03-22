import { AbstractControl, ValidationErrors } from "@angular/forms";

export class ValidacionesPropias {
    static nocero(control: AbstractControl): ValidationErrors| null {
        let nro = parseInt(control.value);
        if (nro  == 0)
            return null;
        else
            return { nocero: true }
    }
    static nonegativos(control: AbstractControl): ValidationErrors| null {
        let nro = parseInt(control.value);
        if (nro >= 0)
            return null;
        else
            return { nonegativos: true }
    }
}
