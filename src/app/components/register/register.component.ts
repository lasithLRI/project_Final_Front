import {Component, OnInit} from '@angular/core';
import {FormsModule} from "@angular/forms";
import {PaginatorModule} from "primeng/paginator";

@Component({
  selector: 'app-register',
  standalone: true,
    imports: [
        FormsModule,
        PaginatorModule
    ],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent implements OnInit{

  email: string = '';
  password: string = '';
  firstname: string = '';
  confirmpaswoard: string = '';

  ngOnInit(): void {
  }

}
