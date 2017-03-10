import { FormControl } from '@angular/forms';

export class FlightValidator {
    static getOnlyCharValidator() {
        return function(control: FormControl) {
            // Custom code
            if(control.value && !control.value.match(/^[A-Za-z æÆøØåÅ]+$/)){
                return { 'charError': true};
            }
        }
    }

}