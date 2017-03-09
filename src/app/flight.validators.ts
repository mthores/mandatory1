import { FormControl } from '@angular/forms';

export class FlightValidator {
    static getOnlyCharValidator() {
        return function(control: FormControl) {
            // Custom code
            if(control.value.match(/^[A-Za-z ]+$/)){
                return { 'charError': true};
            }
        }
    }

    static getIdValidator() {
        return function(control: FormControl) {
            // Custom code
            if(control.value.match(/^\d+$/)){
                return {'idError': true};
                
            }
        }
    }
}