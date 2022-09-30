import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmployeesService {

  employees: any[] = [
    {'name': 'Peter Meyer', 'password': '1234'}, 
    {'name': 'Max Mustermann', 'password': '1234'}, 
    {'name': 'Maik Engel', 'password': '1234'}
  ]
  manager: any[] = [
    {'name': 'Benedikt Huss', 'password': '4321'}, 
  ]

  user: string = "";

  constructor() { }
}
