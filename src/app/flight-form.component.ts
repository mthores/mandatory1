import { Component, OnInit } from '@angular/core';
import { FormGroup, ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';


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
      'departurecity': ['', Validators.required],
      'destinationcity': ['', Validators.required],
      'departuredate': ['', Validators.required],
      'arrivaldate': ['', Validators.required],
      'passengers': ['', Validators.required]
    
    })
  }

  submitFlightForm(flightForm): void {
    console.log(flightForm);
  }

  ngOnInit() {
  }

}
