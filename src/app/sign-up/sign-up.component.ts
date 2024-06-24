import {Component, inject} from '@angular/core';
import {AbstractControl, ReactiveFormsModule, UntypedFormBuilder, ValidationErrors, Validators} from "@angular/forms";
import {AuthService} from "../authentication/auth.service";
import {Router, RouterLink} from "@angular/router";

function passwordMatcher(pwGrp: AbstractControl): ValidationErrors | null {
  const passwd = pwGrp.get('password');
  const confpasswd = pwGrp.get('confirmPassword');
  return passwd!.value === confpasswd!.value ? null : {mismatch: true};
}

@Component({
  selector: 'app-sign-up',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    RouterLink
  ],
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.css'
})
export class SignUpComponent {
  builder: UntypedFormBuilder = inject(UntypedFormBuilder);
  authService: AuthService = inject(AuthService);
  router: Router = inject(Router);
  signupForm = this.builder.group({
    email: ['', [Validators.required, Validators.email]],
    name: ['', Validators.required],
    pwGroup: this.builder.group({
      password: ['', Validators.required],
      confirmPassword: ['', Validators.required]
    }, { validators: [passwordMatcher] })
  });

  get email(): AbstractControl {return <AbstractControl>this.signupForm.get('email'); }
  get name(): AbstractControl {return <AbstractControl>this.signupForm.get('name'); }
  get password(): AbstractControl {return <AbstractControl>this.signupForm.get('pwGroup')!.get('password'); }
  get confirmPassword(): AbstractControl {return <AbstractControl>this.signupForm.get('pwGroup')!.get('confirmPassword'); }
  get pwGroup(): AbstractControl {return <AbstractControl>this.signupForm.get('pwGroup'); }

  register(): void {
    this.authService.signUp(this.email.value, this.password.value, this.name.value)
      .then((_) => {
        this.router.navigate(['address-list']).then(() => {});
      })
      .catch((error) => {
        window.alert(error.message);
      });
  }

  googleSignIn(): void {
    this.authService.googleAuth()
      .then((_) => {
        this.router.navigate(['address-list']).then(() => {});
      })
      .catch((error) => {
        window.alert(error.message);
      });
  }
}
