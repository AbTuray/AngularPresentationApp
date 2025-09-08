import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-form-ex',
  imports: [FormsModule, CommonModule],
  templateUrl: './form-ex.html',
  styleUrl: './form-ex.css'
})
export class FormEx {
  //Abdulai Turay

  // Model for the form
  user = {
    firstname: '',
    lastname: '',
    email: '',
    phone: '',
    course: ''
  };

  // Courses for select dropdown
  courses = ['Computer Science', 'Cybersecurity', 'Software Engineering', 'Data Science'];

  // Submit function
  submitForm(form: any) {
    if (form.valid) {
      alert('Registration Successful!');
      form.reset(); // Clear form after submission
    } else {
      alert('Please fill in all required fields correctly.');
    }
}
}
