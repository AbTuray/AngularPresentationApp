import {Injectable} from '@angular/core';
import { studentModel } from './app.model';

@Injectable({
    providedIn: 'root'
})

export class AppService{
    //Gifty Hermans
    
    students: studentModel[] =[
        {id:1, firstName: "Ab", lastName: "Ray", email: "stud1@mail.com" },
        {id:2, firstName: "Abdul", lastName: "Bangura", email: "stud2@mail.com" },
        {id:3, firstName: "Andy", lastName: "Mo", email: "stud3@mail.com" },
        {id:4, firstName: "Philo", lastName: "Wise", email: "stud4@mail.com" },
        {id:5, firstName: "Gifty", lastName: "Edbless", email: "stud5@mail.com" },
        {id:6, firstName: "Johnny", lastName: "Strang", email: "stud6@mail.com" },
        {id:7, firstName: "Said", lastName: "Freaky", email: "stud7@mail.com" },
    ]

    
}