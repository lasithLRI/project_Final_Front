
import {Component, OnInit} from '@angular/core';
import {Button} from "primeng/button";
import {DialogModule} from "primeng/dialog";
import {InputTextModule} from "primeng/inputtext";
import {FormsModule} from "@angular/forms";
import {PaginatorModule} from "primeng/paginator";

import { Component } from '@angular/core';


@Component({
  selector: 'app-login',
  standalone: true,

  imports: [
    Button,
    DialogModule,
    InputTextModule,
    FormsModule,
    PaginatorModule
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit{

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

  imports: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {


}
