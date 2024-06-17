import { Component } from '@angular/core';
import {MatIcon} from "@angular/material/icon";
import {RouterLink} from "@angular/router";
import {LoginComponent} from "../login/login.component";

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    MatIcon,
    RouterLink,
    LoginComponent
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

}
