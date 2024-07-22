import { Component } from '@angular/core';
import {MatIcon} from "@angular/material/icon";
import {Router, RouterModule} from "@angular/router";

@Component({
  selector: 'app-float-btn',
  standalone: true,
  imports: [
    MatIcon,
    RouterModule
  ],
  templateUrl: './float-btn.component.html',
  styleUrl: './float-btn.component.css'
})
export class FloatBtnComponent {

  constructor(private route: Router) {
  }

  startCat() {
    this.route.navigate(['/add'])
  }
}
