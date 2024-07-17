import { Component } from '@angular/core';
import {MatIcon} from "@angular/material/icon";
import {LoginComponent} from "../login/login.component";
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    MatIcon,
    LoginComponent,
    RouterLink
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

  logo: string = 'public/images/logo.png';

}
