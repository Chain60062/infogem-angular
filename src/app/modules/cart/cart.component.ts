import { Component } from '@angular/core';
import {
  FormBuilder,
  Validators,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatStepperModule } from '@angular/material/stepper';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { STEPPER_GLOBAL_OPTIONS } from '@angular/cdk/stepper';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [
    MatStepperModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
  ],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css',
  providers: [
    {
      provide: STEPPER_GLOBAL_OPTIONS,
      useValue: { displayDefaultIndicatorType: false },
    },
  ],
})
export class CartComponent {
  mainFormGroup = this._formBuilder.group({
    mainCtrl: ['', Validators.required],
  });

  constructor(private _formBuilder: FormBuilder) {}
}
