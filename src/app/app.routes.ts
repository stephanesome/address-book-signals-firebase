import {Routes} from '@angular/router';
import {SignInComponent} from "./sign-in/sign-in.component";
import {SignUpComponent} from "./sign-up/sign-up.component";
import {AddressListComponent} from "./address-list/address-list.component";
import {AuthGuard} from "@angular/fire/auth-guard";
import {PasswordForgotComponent} from "./password-forgot/password-forgot.component";

export const routes: Routes = [
  { path: '', redirectTo: '/sign-in', pathMatch: 'full' },
  { path: 'sign-in', component: SignInComponent },
  { path: 'sign-up', component: SignUpComponent },
  { path: 'address-list', component: AddressListComponent, canActivate: [AuthGuard] },
  { path: 'password-forgot', component: PasswordForgotComponent }
];
