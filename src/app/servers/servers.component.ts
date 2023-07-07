import { Component } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent {
serverCreateOption : boolean =false;
serverStatus : string = "offline";
servername : string = "";
serverCreated : string ="Created";
serversList = ['S1','S2','S3',''];
num :number=0;
serverSelected:string='';



constructor() {
 setTimeout(() => {
 this.serverCreateOption=true;
 }, 5000);
}

onServerAdd(){
   this.serverCreated=="not yet Created";
  this.serverStatus="online";
  this.serversList.push(this.servername)
 
}
onServerNameTyped(event:Event){
  return  this.servername = (<HTMLInputElement>event.target).value;

}


}
