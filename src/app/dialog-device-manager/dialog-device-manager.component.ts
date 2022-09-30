import { Component, OnInit } from '@angular/core';
import { DevicelistService } from '../devicelist.service';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { DialogAddDeviceComponent } from '../dialog-add-device/dialog-add-device.component';


@Component({
  selector: 'app-dialog-device-manager',
  templateUrl: './dialog-device-manager.component.html',
  styleUrls: ['./dialog-device-manager.component.scss']
})
export class DialogDeviceManagerComponent implements OnInit {

  selectedDevice: string = "-";
  newName: string = "";

  constructor(public devicelist: DevicelistService, public dialog: MatDialog) { }


  ngOnInit(): void {
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

}
