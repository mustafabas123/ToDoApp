import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 Name = 'Mustafa';
 items = [
  {description :"Kahvalti",action:"Hayir"},
  {description :"Spor",action:"Hayir"},
  {description :"Mesajlar",action:"Hayir"},
  {description :"Faturalar",action:"Hayir"}
 ];
}
