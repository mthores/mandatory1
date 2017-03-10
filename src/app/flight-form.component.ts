import { Component, OnInit } from '@angular/core';
import { FormGroup, ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { FlightValidator } from './flight.validators';



@Component({
  selector: 'app-flight-form',
  templateUrl: './flight-form.component.html',
  styleUrls: ['Styles/css/flight-form.component.css']
})
export class FlightFormComponent implements OnInit {
  private flightForm: FormGroup;

  constructor(fb: FormBuilder) {
    this.flightForm = fb.group({
      'type': ['', Validators.required],
      'departurecity': ['', [Validators.required, FlightValidator.getOnlyCharValidator()]],
      'destinationcity': ['', [Validators.required, FlightValidator.getOnlyCharValidator()]],
      'departuredate': ['', Validators.required],
      'returndate': ['', Validators.required],
      'tickettype': ['', Validators.required],
      'passengers': ['', Validators.required]
    })
  }

  submitFlightForm(flightForm): void {
    if (flightForm.valid) {
      console.log(flightForm.value);
      flightForm.reset();
    } else {
      //Alert
    }
  }

  ngOnInit() {
  }

}
