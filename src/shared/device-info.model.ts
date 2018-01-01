export class DeviceInfoModel{
  //public hostname:string;
  //public loopback:string;

  constructor(public hostname:string ,public loopback:string){

    this.hostname=hostname;
    this.loopback=loopback;
  }
}
