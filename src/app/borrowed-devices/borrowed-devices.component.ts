import { Component, OnInit } from '@angular/core';
import { DevicelistService } from '../devicelist.service';

@Component({
  selector: 'app-borrowed-devices',
  templateUrl: './borrowed-devices.component.html',
  styleUrls: ['./borrowed-devices.component.scss']
})
export class BorrowedDevicesComponent implements OnInit {

  constructor(public devicelist: DevicelistService) { }

  ngOnInit(): void {
  }

}
