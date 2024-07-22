import { Component } from '@angular/core';
import {StepperModule} from "primeng/stepper";
import {Button} from "primeng/button";
import {PaginatorModule} from "primeng/paginator";
import {ToastModule} from "primeng/toast";
import {BadgeModule} from "primeng/badge";
import {FileUploadModule} from "primeng/fileupload";
import {HeaderComponent} from "../header/header.component";
import {FooterComponent} from "../footer/footer.component";

@Component({
  selector: 'app-post-ad-form',
  standalone: true,
  imports: [
    StepperModule,
    Button,
    PaginatorModule,
    BadgeModule,
    ToastModule,
    FileUploadModule,
    HeaderComponent,
    FooterComponent
  ],
  templateUrl: './post-ad-form.component.html',
  styleUrl: './post-ad-form.component.css'
})
export class PostAdFormComponent {
  value: string='';

  onSubmit() {
    console.log('Form submitted..');
  }
}
