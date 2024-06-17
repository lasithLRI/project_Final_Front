import { Component } from '@angular/core';
import {SidePanelComponent} from "../side-panel/side-panel.component";
import {AdsPanelComponent} from "../ads-panel/ads-panel.component";
import {FloatBtnComponent} from "../float-btn/float-btn.component";

@Component({
  selector: 'app-main-outer',
  standalone: true,
  imports: [
    SidePanelComponent,
    AdsPanelComponent,
    FloatBtnComponent
  ],
  templateUrl: './main-outer.component.html',
  styleUrl: './main-outer.component.css'
})
export class MainOuterComponent {

}
