import { Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import {
  MAT_FORM_FIELD_DEFAULT_OPTIONS,
  MatFormFieldModule,
} from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { NgxMaskDirective, NgxMaskPipe, provideNgxMask } from 'ngx-mask';
import { MatNativeDateModule } from '@angular/material/core';

@Component({
  selector: 'app-register',
  standalone: true,
  templateUrl: './register.component.html',
  styleUrl: './register.component.css',
  imports: [
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatDatepickerModule,
    FormsModule,
    NgxMaskDirective,
    NgxMaskPipe,
    MatNativeDateModule,
  ],
  providers: [
    provideNgxMask(),
    {
      provide: MAT_FORM_FIELD_DEFAULT_OPTIONS,
      useValue: { appearance: 'outline' },
    },
  ],
})
export class RegisterComponent {
  loginForm = new FormGroup({
    name: new FormControl('', [Validators.required]),
    cpf: new FormControl('', [Validators.required, Validators.minLength(11)]),
    phone: new FormControl('', [Validators.required]),
    birthDate: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required]),
    confirmPassword: new FormControl('', [Validators.required]),
  });

  getEmailErrorMessage() {
    if (this.loginForm.get('email')!.hasError('required'))
      return 'E-mail é obrigatório.';
    return this.loginForm.get('email')!.hasError('email')
      ? 'Não é um e-mail válido.'
      : '';
  }
  getPasswordErrorMessage() {
    return this.loginForm.get('password')!.hasError('required')
      ? 'Senha é obrigatória.'
      : '';
  }
  getCpfErrorMessage() {
    if (this.loginForm.get('cpf')!.hasError('minlength')) return 'CPF inválido.';
    return this.loginForm.get('cpf')!.hasError('required')
      ? 'CPF é obrigatório.'
      : '';
  }
  getNameErrorMessage() {
    return this.loginForm.get('name')!.hasError('required')
      ? 'Nome é obrigatório.'
      : '';
  }
  getPhoneErrorMessage() {
    return this.loginForm.get('phone')!.hasError('required')
      ? 'Número de telefone é obrigatório.'
      : '';
  }
  getConfirmPasswordErrorMessage() {
    return this.loginForm.get('confirmPassword')!.hasError('required')
      ? 'Por favor confirme a senha'
      : '';
  }
  getBirthDateErrorMessage() {
    return this.loginForm.get('birthDate')!.hasError('required')
      ? 'Data de nascimento é obrigatória.'
      : '';
  }
}
