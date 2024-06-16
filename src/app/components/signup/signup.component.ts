import {Component, OnInit} from '@angular/core';
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [
    FormsModule
  ],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent implements OnInit{

  email: string = '';
  password: string = '';
  firstname: string = '';
  confirmpaswoard: string = '';

  ngOnInit(): void {
  }

}
