import { Component, inject } from '@angular/core';
import { AppService } from '../app.service';
import { CommonModule } from '@angular/common';
import { CurrencyConverterPipe } from '../currency-converter-pipe';

@Component({
  selector: 'app-directive-ex',
  imports: [CommonModule, CurrencyConverterPipe],
  templateUrl: './directive-ex.html',
  styleUrl: './directive-ex.css'
})
export class DirectiveEx {

  //Injecting the service into the component
  appService = inject(AppService);

  //Creating an object to access items in the service
  currentStudent = this.appService.student;

  showList = false;
  //Function to toggle the button
  toggleList(){
    this.showList = !this.showList;
  }

  //Properties Created for ngClass and ngStyle
  successClass="text-success"
  haserror = true
  isSpecial = true
  messageClasses = {
    "text-success": !this.haserror,
    "text-danger": this.haserror,
    "text-special": this.isSpecial
  };
  
  highlightColor = "orange"
  titleStyle ={
    color: "blue",
    fontStyle: "italic"
  }
}
