import { CommonModule, NgIf } from '@angular/common';
import { Component, inject } from '@angular/core';
import { AppService } from '../app.service';


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
  presenters = ["Gifty Hermans", "Philip Jalloh", "Abdulai Turay"];

  //Function to Hide and Show Presenters
  toggleNames(){
    this.showPresenter = !this.showPresenter;
  }

    appService = inject(AppService);

    presentersList = this.appService.student;

    showList = false;
  //Function to toggle the button
  toggleList(){
    this.showList = !this.showList;
  }
  
}
