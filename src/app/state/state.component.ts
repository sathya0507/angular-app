// state.component.ts
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { StateDistrictService } from '../services/state-district.service';

@Component({
  selector: 'app-state',
  templateUrl: './state.component.html',
  styleUrls: ['./state.component.scss'],
})
export class StateComponent implements OnInit {
  dropdownForm!: FormGroup;
  states: any[] = [];
  districts: any[] = [];

  constructor(
    private fb: FormBuilder,
    private stateDistrictService: StateDistrictService
  ) {}

  ngOnInit(): void {
    this.dropdownForm = this.fb.group({
      selectedState: [''],
      selectedDistrict: [''],
    });

    this.stateDistrictService.getStates().subscribe((states) => {
      this.states = states;
    });

    this.dropdownForm
      .get('selectedState')
      ?.valueChanges.subscribe((stateId) => {
        stateId &&
          this.stateDistrictService.getDistricts(stateId).subscribe({
            next: (districts) => (this.districts = districts),
            error: (err) => console.error(err),
          });
      });
  }
}
