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
      fullName: 'mohammed',
      motherName: 'zahra ahmed',
      jobNumber: 'JD12345',
      dateOfEmployment: '2020-05-15',
      age:22,
      gender: 'Male',
      residence: 'baghdad, iraq'
    },
    {
      id: 2,
      fullName: 'nisren ali',
      motherName: 'nawal jwad',
      jobNumber: 'fa54321',
      dateOfEmployment: '2018-10-20',
      age: 28,
      gender: 'Female',
      residence: 'hai tunis, basra'
    },
    {
      id: 3,
      fullName: 'aliya',
      motherName: 'nawal jwad',
      jobNumber: 'gS54321',
      dateOfEmployment: '2023-10-20',
      age: 18,
      gender: 'Female',
      residence: 'hai tunis, Dyala'
    },
    {
      id: 4,
      fullName: 'walyed',
      motherName: 'hend shahen',
      jobNumber: 'JS543521',
      dateOfEmployment: '2018-10-20',
      age: 28,
      gender: 'Female',
      residence: 'hai tunis, basra'
    },
    {
      id: 5,
      fullName: 'Dalya imad',
      motherName: 'laila luay',
      jobNumber: 'pu54321',
      dateOfEmployment: '2020-10-20',
      age: 26,
      gender: 'Female',
      residence: 'hai tunis, basra'
    },
  
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

