import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DevicelistService } from '../devicelist.service';
import { EmployeesService } from '../employees.service';
import { Firestore, collectionData, collection } from '@angular/fire/firestore';
import { doc, setDoc } from "firebase/firestore";

@Component({
  selector: 'app-dialog-employees',
  templateUrl: './dialog-employees.component.html',
  styleUrls: ['./dialog-employees.component.scss']
})
export class DialogEmployeesComponent implements OnInit {

  selectedDevice: string = "-";
  task: string = "";

  constructor(public devicelist: DevicelistService, public dialog: MatDialog, public firestore: Firestore, public employees: EmployeesService) { }

  ngOnInit(): void {
    this.updateFirestore()
  }

  async updateFirestore() {
    await setDoc(doc(this.firestore, "devicelist", "borrowed"), {
      borrowed: this.devicelist.borrowed,
    });
    await setDoc(doc(this.firestore, "devicelist", "devices"), {
      devices: this.devicelist.devices,
    });
  }

  borrow() {
    this.devicelist.borrowed.push({ name: this.employees.user, device: this.selectedDevice, task: this.task });
    let index = this.devicelist.devices.indexOf(this.selectedDevice)
    if (index >= 0) {
      this.devicelist.devices.splice(index, 1);
      this.selectedDevice = "";
    }
    this.updateFirestore()
  }

}
