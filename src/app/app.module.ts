import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { DeviceListComponent } from './device-list/device-list.component';
import { DeviceEditComponent } from './device-list/device-edit/device-edit.component';


@NgModule({
  declarations: [
    AppComponent,
    DeviceListComponent,
    DeviceEditComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
