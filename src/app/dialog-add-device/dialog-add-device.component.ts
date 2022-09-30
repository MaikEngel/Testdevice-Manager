import { Component, OnInit } from '@angular/core';
import { DevicelistService } from '../devicelist.service';

@Component({
  selector: 'app-dialog-add-device',
  templateUrl: './dialog-add-device.component.html',
  styleUrls: ['./dialog-add-device.component.scss']
})
export class DialogAddDeviceComponent implements OnInit {

  deviceName: string = "";

  constructor(public devicelist: DevicelistService) { }

  ngOnInit(): void {
  }

  addDevice() {
    this.devicelist.devices.push(this.deviceName)
    console.log(this.devicelist.devices)
  }

}
