import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DialogLoginComponent } from './dialog-login/dialog-login.component';
import { DialogEmployeesComponent } from './dialog-employees/dialog-employees.component';
import { DialogDeviceManagerComponent } from './dialog-device-manager/dialog-device-manager.component';

@NgModule({
  declarations: [
    AppComponent,
    DialogLoginComponent,
    DialogEmployeesComponent,
    DialogDeviceManagerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
