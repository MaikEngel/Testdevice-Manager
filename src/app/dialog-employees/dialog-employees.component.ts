import { Component, OnInit } from '@angular/core';
import { DevicelistService } from '../devicelist.service';

@Component({
  selector: 'app-dialog-employees',
  templateUrl: './dialog-employees.component.html',
  styleUrls: ['./dialog-employees.component.scss']
})
export class DialogEmployeesComponent implements OnInit {

  selectedDevice: string = "-";

  constructor(public devicelist: DevicelistService) { }

  ngOnInit(): void {
  }

}
