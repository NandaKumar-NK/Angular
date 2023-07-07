import { Component } from '@angular/core';

@Component({
 selector: 'app-server',
 //selector:".app-my-server",
 //selector:'[app-server]',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent {
  serverId : number = 1001;
  serverStatus: string = 'offline';
  servernum= [101,102];
 
  constructor(){
    this.serverStatus=Math.random()>0.5 ? 'online' : 'offline';
   }

  getServerId(){
    return this.serverId;
  }
  getServerStatus(){
    return this.serverStatus;
  }
  getColor()
  {
    return this.serverStatus == 'online'?'green':'red';
  }
}
