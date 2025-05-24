import {Component, inject} from '@angular/core';
import {Router, RouterLink} from "@angular/router";
import {AuthService} from "../authentication/auth.service";

@Component({
  selector: 'app-sign-in',
  imports: [
    RouterLink
  ],
  templateUrl: './sign-in.component.html',
  standalone: true,
  styleUrl: './sign-in.component.css'
})
export class SignInComponent {
  authService: AuthService = inject(AuthService);
  private router: Router = inject(Router);

  signIn(email: string, password: string): void {
    this.authService.signIn(email, password)
      .then(() => {
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
