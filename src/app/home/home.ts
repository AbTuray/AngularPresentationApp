import { CommonModule, NgIf } from '@angular/common';
import { Component, inject } from '@angular/core';
import { AppService } from '../app.service';
import { studentModel } from '../app.model';


@Component({
  selector: 'app-home',
  imports: [CommonModule, NgIf],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {
  //Abdulai Turay

  //Variables
  title = "Angular Presentation";
  showPresenter = false;
  presenters = ["Gifty Hemans", "Philip Jalloh", "Abdulai Turay"];

  //Function to Hide and Show Presenters
  toggleNames(){
    this.showPresenter = !this.showPresenter;
  }

  //Gifty Hemans

  // appService = inject(AppService);
  //presentersList = this.appService.students;
  //presentersList: studentModel;
  students: studentModel[];
  constructor(private appService: AppService) {
    this.students = this.appService.students;
  }

  showList = false;
  //Function to toggle the button
  toggleList(){
    this.showList = !this.showList;
  }

}
