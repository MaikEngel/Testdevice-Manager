import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DialogDeviceManagerComponent } from './dialog-device-manager/dialog-device-manager.component';
import { DialogEmployeesComponent } from './dialog-employees/dialog-employees.component';
import { DialogLoginComponent } from './dialog-login/dialog-login.component';

const routes: Routes = [
  { path: '', component: DialogLoginComponent},
  { path: 'employees', component: DialogEmployeesComponent},
  { path: 'device-manager', component: DialogDeviceManagerComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
