import { Component, OnInit } from '@angular/core';
import {DeviceInfoModel} from "../../shared/device-info.model";

@Component({
  selector: 'app-device-list',
  templateUrl: './device-list.component.html',
  styleUrls: ['./device-list.component.css']
})
export class DeviceListComponent implements OnInit {
  deviceInfo:DeviceInfoModel[] = [
    new DeviceInfoModel('Lenovo','192.168.0.1'),
    new DeviceInfoModel('HP','111.234.23.3'),
  ];

  constructor() { }

  ngOnInit() {
  }

}
