import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DevicelistService } from '../devicelist.service';
import { EmployeesService } from '../employees.service';
import { Firestore } from '@angular/fire/firestore';
import { doc, setDoc, getDoc } from "firebase/firestore";

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
    this.downloadFirebase();
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

  async updateFirestore() {
    await setDoc(doc(this.firestore, "devicelist", "borrowed"), {
      borrowed: this.devicelist.borrowed,
    });
    await setDoc(doc(this.firestore, "devicelist", "devices"), {
      devices: this.devicelist.devices,
    });
  }

  borrow() {
    if (this.employees.user) {
      this.devicelist.borrowed.push({ name: this.employees.user, device: this.selectedDevice, task: this.task });
      let index = this.devicelist.devices.indexOf(this.selectedDevice)
      if (index >= 0) {
        this.devicelist.devices.splice(index, 1);
        this.selectedDevice = "";
      }
      this.updateFirestore()
    }
  }

}
