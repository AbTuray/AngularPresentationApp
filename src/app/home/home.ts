import { CommonModule, NgIf } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  imports: [CommonModule, NgIf],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {
  
  //Variables
  title = "Angular Presentation";
  showPresenter = false;
  presenters = ["Gifty Hemans", "Philip Jalloh", "Abdulai Turay"];

  //Function to Hide and Show Presenters
  toggleNames(){
    this.showPresenter = !this.showPresenter;
  }
}
