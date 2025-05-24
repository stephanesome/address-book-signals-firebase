import {Component, inject} from '@angular/core';
import { CommonModule } from '@angular/common';
import {AuthService} from "../authentication/auth.service";
import {Router} from "@angular/router";
import {Observable} from "rxjs";
import {User} from "@angular/fire/auth";

@Component({
  selector: 'app-header',
  imports: [CommonModule],
  templateUrl: './header.component.html',
  standalone: true,
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  authService: AuthService = inject(AuthService);
  router: Router = inject(Router);

  get user(): Observable<User | null> {
    return this.authService.user$;
  }

  signOut(): void {
    this.authService.signOut().then((_) => {
      this.router.navigate(['sign-in']).then(() => {});
    });
  }
}
