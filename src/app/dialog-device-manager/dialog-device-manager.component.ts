import { Component, OnInit } from '@angular/core';
import { DevicelistService } from '../devicelist.service';
import { MatDialog } from '@angular/material/dialog';
import { DialogAddDeviceComponent } from '../dialog-add-device/dialog-add-device.component';
import { Firestore, collection } from '@angular/fire/firestore';
import { doc, setDoc, getDoc } from "firebase/firestore";
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
    this.downloadFirebase();
  }

  async updateFirestore() {
    await setDoc(doc(this.firestore, "devicelist", "borrowed"), {
      borrowed: this.devicelist.borrowed,
    });
    await setDoc(doc(this.firestore, "devicelist", "devices"), {
      devices: this.devicelist.devices,
    });
  }

  changeDeviceName() {
    if (this.employees.user) {
      let index = this.devicelist.devices.indexOf(this.selectedDevice)
      this.devicelist.devices[index] = this.newName;
      this.updateFirestore();
    }
  }

  openDialog(enterAnimationDuration: string, exitAnimationDuration: string): void {
    this.dialog.open(DialogAddDeviceComponent, {
      width: '300px',
      enterAnimationDuration,
      exitAnimationDuration,
    });
  }

  deleteDevice() {
    if (this.employees.user) {
      let index = this.devicelist.devices.indexOf(this.selectedDevice)
      if (index >= 0) {
        this.devicelist.devices.splice(index, 1);
        this.selectedDevice = "";
      }
      this.updateFirestore();
    }
  }

  borrow() {
    if (this.employees.user) {

      this.devicelist.borrowed.push({ name: this.employees.user, device: this.selectedDevice, task: this.task });
      this.deleteDevice();
      this.updateFirestore();
    }
  }

  downloadFirebase() {
    this.downloadBorrowed();
    this.downloadDevices();
  }

  async downloadBorrowed() {
    const borrowedRef = doc(this.firestore, "devicelist", "borrowed");
    const borrowedSnap = await getDoc(borrowedRef);

    if (borrowedSnap.exists()) {
      this.devicelist.borrowed = borrowedSnap.data()['borrowed'];
    } else {
      // doc.data() will be undefined in this case
      console.log("No such document!");
    }
  }

  async downloadDevices() {
    const deviceRef = doc(this.firestore, "devicelist", "devices");

    const deviceSnap = await getDoc(deviceRef);

    if (deviceSnap.exists()) {
      this.devicelist.devices = deviceSnap.data()['devices'];
    } else {
      // doc.data() will be undefined in this case
      console.log("No such document!");
    }
  }
}
