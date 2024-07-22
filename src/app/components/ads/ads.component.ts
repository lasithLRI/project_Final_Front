import { Component } from '@angular/core';
import {HeaderComponent} from "../header/header.component";
import {SidePanelComponent} from "../side-panel/side-panel.component";
import {MainOuterComponent} from "../main-outer/main-outer.component";
import {FooterComponent} from "../footer/footer.component";

@Component({
  selector: 'app-ads',
  standalone: true,
  imports: [
    HeaderComponent,
    SidePanelComponent,
    MainOuterComponent,
    FooterComponent
  ],
  templateUrl: './ads.component.html',
  styleUrl: './ads.component.css'
})
export class AdsComponent {

}
