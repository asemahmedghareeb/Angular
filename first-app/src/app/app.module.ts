import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { ServerComponent } from './server/server.component';
import { ServersComponent } from './servers/servers.component';
import {WarningComponent} from './WarningAlert/warningAlert.component';
import { SucessComponent } from './sucess/sucess.component'

@NgModule({
  declarations: [AppComponent,ServerComponent, ServersComponent,WarningComponent, SucessComponent],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
