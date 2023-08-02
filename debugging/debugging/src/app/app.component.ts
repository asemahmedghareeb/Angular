import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  servers=[];

  onAddServer() {
    this.servers.push(`Server no ${this.servers.length+1}`);
  }

  onRemoveServer(id: number) {
    const position = id ;
    this.servers?.splice(position,1);
  }
}
