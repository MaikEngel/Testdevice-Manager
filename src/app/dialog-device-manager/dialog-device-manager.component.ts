import { Component, OnInit } from '@angular/core';
import { DevicelistService } from '../devicelist.service';
import { MatDialog } from '@angular/material/dialog';
import { DialogAddDeviceComponent } from '../dialog-add-device/dialog-add-device.component';
import { Firestore, collectionData, collection } from '@angular/fire/firestore';
import { doc, setDoc } from "firebase/firestore";
import { EmployeesService } from '../employees.service';


@Component({
  selector: 'app-dialog-device-manager',
  templateUrl: './dialog-device-manager.component.html',
  styleUrls: ['./dialog-device-manager.component.scss']
})
export class DialogDeviceManagerComponent implements OnInit {

  selectedDevice: string = "-";
  newName: string = "";
  task: string = "";

  constructor(public devicelist: DevicelistService, public dialog: MatDialog, public firestore: Firestore, public employees: EmployeesService) {
    const coll = collection(this.firestore, 'items');
  }


  ngOnInit(): void {

  }

  async test() {
    await setDoc(doc(this.firestore, "devicelist", "devices"), {
      borrowed: this.devicelist.devices,
    });
  }

  changeDeviceName() {
    let index = this.devicelist.devices.indexOf(this.selectedDevice)
    this.devicelist.devices[index] = this.newName;
  }

  openDialog(enterAnimationDuration: string, exitAnimationDuration: string): void {
    this.dialog.open(DialogAddDeviceComponent, {
      width: '300px',
      enterAnimationDuration,
      exitAnimationDuration,
    });
  }

  deleteDevice() {
    let index = this.devicelist.devices.indexOf(this.selectedDevice)
    if (index >= 0) {
      this.devicelist.devices.splice(index, 1);
      this.selectedDevice = "";
    }
  }

  borrow() {
    this.devicelist.borrowed.push({ name: this.employees.user, device: this.selectedDevice, task: this.task })
    console.log(this.devicelist.borrowed);
    
  }

}
