import { CommonModule } from '@angular/common';
import { Component, signal, computed } from '@angular/core';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-signals-ex',
  imports: [FormsModule, CommonModule],
  templateUrl: './signals-ex.html',
  styleUrl: './signals-ex.css'
})
export class SignalsEx {

  title = signal<string>("Using Signals");

  //Signal Values
  firstNumber = signal(0);
  secondNumber = signal(0);
  result = signal(0);

  add() {
    this.result.set(this.firstNumber() + this.secondNumber())
  }

  subtract() {
    this.result.set(this.firstNumber() - this.secondNumber())
  }

  multiply() {
    this.result.set(this.firstNumber() * this.secondNumber())
  }

  divide() {
    this.result.set(this.firstNumber() * this.secondNumber())
  }

  increment() {
    this.result.update(update => update + 1)
  }

  decrement() {
    this.result.update(decrease => decrease - 1)
  }

  clearInputField() {
    this.firstNumber.set(0);
    this.secondNumber.set(0);
    this.result.set(0);
  }

  // Initial workers array
  workers = signal<{ id: number, name: string, surname: string, age: number }[]>([]);

  // Signals for filter inputs
  filterName = signal('');
  filterSurname = signal('');

  // Signals for new worker inputs
  newId = signal<number | null>(null);
  newName = signal('');
  newSurname = signal('');
  newAge = signal<number | null>(null);

  filteredWorkers = computed(() => {
    return this.workers().filter(worker =>
      worker.name.includes(this.filterName()) &&
      worker.surname.includes(this.filterSurname())
    );
  });

  addWorker() {
    if (
      this.newId() !== null && this.newName() && this.newSurname() && this.newAge() !== null
    ) {
      this.workers.update(workers => [
        ...workers,
        {
          id: this.newId()!,
          name: this.newName(),
          surname: this.newSurname(),
          age: this.newAge()!
        }
      ]);

      // Clear inputs
      this.newId.set(null);
      this.newName.set('');
      this.newSurname.set('');
      this.newAge.set(null);
    }
  }



}
