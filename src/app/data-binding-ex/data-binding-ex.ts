import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-data-binding-ex',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './data-binding-ex.html',
  styleUrl: './data-binding-ex.css'
})
export class DataBindingEx {
  //Philip Jalloh

  //String Iinterpolation
  title1 = "String Interpolation by Philo "


<<<<<<< Updated upstream
=======

>>>>>>> Stashed changes
  //Property Binding
  firstInput = "text"
  entered!: string;

  //Event Binding
  num1 = 0;
  num2 = 0;
  result = 0;

  add(){
    return this.result = this.num1 + this.num2;
  }

  increment(){
    return this.result ++
  }

   decrement(){
    return this.result --
  }



}
