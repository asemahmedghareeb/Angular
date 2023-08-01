import { Component } from '@angular/core';
@Component({
  // selector: '[app-servers]',
  // selector: '.app-servers',
  // selector: '#app-servers',
  selector: 'app-servers',
  // template: `<app-server></app-server>
  //           <app-server></app-server>`
  templateUrl:"./servers.component.html",
  styles: [`
    .white_text{
      color:white;
    }
  `]
})

export class ServersComponent {
  serverCreationStatus:string="No server was created!";
  allowNewServer:boolean=true;
  serverName:string="";
  serverCreated:boolean=false;
  userName:string="";
  allowReset:boolean=true;
  show:boolean=false
  servers=['TestServer',"TestServer2"]
  btnClicks=[]
  constructor(){
    setTimeout(() => {
      this.allowNewServer=false;
    },2000)
  }
  onCreateServer(){
    this.serverCreated=true;
    this.servers.push(this.serverName)
    this.serverCreationStatus="server was created! "+this.serverName
    
  }
  DisplayDetails(){
    this.show=!this.show;
    this.btnClicks.push(new Date().toLocaleString())
  }
  onUpdateServerName(event:any){
    this.serverName=event.target.value
  }
}