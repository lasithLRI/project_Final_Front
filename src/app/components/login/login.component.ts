
import {Component, OnInit} from '@angular/core';
import {Button} from "primeng/button";
import {DialogModule} from "primeng/dialog";
import {InputTextModule} from "primeng/inputtext";
import {FormBuilder, FormsModule, ReactiveFormsModule, Validators} from "@angular/forms";
import {PaginatorModule} from "primeng/paginator";

import {Router, RouterLink} from "@angular/router";
import {UserService} from "../../services/user/user.service";
import {MatIcon} from "@angular/material/icon";
import {NgStyle} from "@angular/common";


@Component({
  selector: 'app-login',
  standalone: true,

  imports: [
    Button,
    DialogModule,
    InputTextModule,
    FormsModule,
    PaginatorModule,
    MatIcon,
    RouterLink,
    ReactiveFormsModule,
    NgStyle
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit {

  constructor(private router: Router, private userService: UserService) {
  }

  email: string = '';
  password: string = '';

  visible: boolean = false;

  showDialog() {
    this.visible = true;
  }

  closeDialog() {
    this.visible = false;
  }

  ngOnInit(): void {
  }


  login(email: string, password: string) {
    this.visible = this.userService.userlogin(email, password)
  }

}

