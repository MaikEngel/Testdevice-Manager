import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { EmployeesService } from '../employees.service';

@Component({
  selector: 'app-dialog-login',
  templateUrl: './dialog-login.component.html',
  styleUrls: ['./dialog-login.component.scss']
})
export class DialogLoginComponent implements OnInit {

  username = new FormControl('', [Validators.required]);
  password = new FormControl('', [Validators.required]);

  name: string = "";
  pass: string = "";

  hide = true;

  constructor(public router: Router, public employees: EmployeesService) { }

  getErrorMessage() {
    if (this.username.hasError('required')) {
      return 'You must enter a username';
    }

    return this.username.hasError('username') ? 'Not a valid username' : '';
  }

  getPasswordErrorMessage() {
    if (this.password.hasError('required')) {
      return 'You must enter a password';
    }

    return this.password.hasError('password') ? 'Not a valid password' : '';
  }


  ngOnInit(): void {
  }

  login() {
    this.employees.employees.forEach(employee => {
      if (employee.name === this.name && employee.password === this.pass) {
        this.router.navigateByUrl('/employees')
        this.employees.user = this.name;
      }
    });

    this.employees.manager.forEach(manager => {
      if (manager.name === this.name && manager.password === this.pass) {
        this.router.navigateByUrl('/device-manager')
        this.employees.user = this.name;
      }
    });

    console.log(this.employees.user);
  }

}
