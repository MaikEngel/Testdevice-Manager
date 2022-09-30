import { Component, OnInit } from '@angular/core';
import { DevicelistService } from '../devicelist.service';
import { Firestore, collection } from '@angular/fire/firestore';
import { doc, setDoc, getDoc } from "firebase/firestore";

@Component({
  selector: 'app-borrowed-devices',
  templateUrl: './borrowed-devices.component.html',
  styleUrls: ['./borrowed-devices.component.scss']
})
export class BorrowedDevicesComponent implements OnInit {

  constructor(public devicelist: DevicelistService,  public firestore: Firestore) { }

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
}
