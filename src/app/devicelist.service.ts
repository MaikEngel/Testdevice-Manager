import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DevicelistService {

  devices: string[] = ['IPhone 6', 'IPhone 8', 'MAC', 'PC', 'Samsung Galaxy S8']

  constructor() { }
}
