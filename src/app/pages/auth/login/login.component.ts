import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { validEmail } from '../../../shared/validators/input-validators';
import { AuthService } from '../../../core/services/auth.service';
import { LoginRequestModel } from '../../../core/models/request/login-request.model';
import { modalError } from '../../../shared/modals/modals-swal';
import { ModalsModel } from '../../../shared/modals/modals.model';
import { Router } from '@angular/router';
import { StorageService } from '../../../core/services/storage.service';

@Component({
  selector: 'app-login',
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  loginForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private storageService: StorageService,
    private router: Router
  ) {

    this.loginForm = this.fb.group({
      email: ['',
        [
          Validators.required,
          validEmail.bind(this)
        ]
      ],
      password: ['',
        [
          Validators.required,
          Validators.minLength(6)
        ]
      ]
    });
  }

  login(): void {
    if (this.loginForm.invalid) {
      this.loginForm.markAllAsTouched();
      return;
    }

    const formValue = this.loginForm.value as LoginRequestModel;

    this.authService.login(formValue).subscribe((resp) => {
      if (resp.code != "LU001") {
        let reqModel: ModalsModel = {
          icon: "error",
          title: 'Ha ocurrido un error',
          text: resp.message,
          confirmButtonText: "Aceptar",
          onSuccess() {},
          onBack() {}
        }

        modalError(reqModel)
        return;
      }

      this.storageService.saveStorage('token', resp.data.token);
      this.storageService.saveStorage('user', resp.data);

      if (resp.data.roleId == 1) {
        this.router.navigate(['/dashboard']);
      } else {
        this.router.navigate(['/gastos']);
      }
    });
  }

}
