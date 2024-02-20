import { Component } from '@angular/core';

@Component({
  selector: 'app-lazycom',
  templateUrl: './lazycom.component.html',
  styleUrls: ['./lazycom.component.css']
})
export class LazycomComponent {
  employees = [
    {
      id: 1,
      fullName: 'John Doe',
      motherName: 'Mary Doe',
      jobNumber: 'JD12345',
      dateOfEmployment: '2020-05-15',
      age: 32,
      gender: 'Male',
      residence: '123 Main Street, Cityville'
    },
    {
      id: 2,
      fullName: 'Jane Smith',
      motherName: 'Emily Smith',
      jobNumber: 'JS54321',
      dateOfEmployment: '2018-10-20',
      age: 28,
      gender: 'Female',
      residence: '456 Oak Avenue, Townsville'
    },
    // Add more employee data here...
  ];

  selectedEmployee: any;

  showDetails(employee: any) {
    this.selectedEmployee = employee;
    document.getElementById('myModal')!.style.display = 'block';
  }

  closeModal() {
    this.selectedEmployee = null;
    document.getElementById('myModal')!.style.display = 'none';
  }
}

