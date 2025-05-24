import {Component, inject} from '@angular/core';
import {RouterLink} from "@angular/router";
import {AuthService} from "../authentication/auth.service";

@Component({
  selector: 'app-password-forgot',
  imports: [
    RouterLink
  ],
  templateUrl: './password-forgot.component.html',
  standalone: true,
  styleUrl: './password-forgot.component.css'
})
export class PasswordForgotComponent {
  authService: AuthService = inject(AuthService);

  passwordReset(email: string): void {
    this.authService.passwordReset(email)
      .then(() => {
        window.alert('Password reset email sent, check your inbox.');
      }).catch((error: any) => {
      window.alert(error);
    });
  }
}
