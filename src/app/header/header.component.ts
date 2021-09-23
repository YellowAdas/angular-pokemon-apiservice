import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor( private http : HttpClient) { }

  ngOnInit() {
  }
  getLogo(){
    return this.http.get('https://pl.wikipedia.org/wiki/Pok%C3%A9mon#/media/Plik:International_Pok%C3%A9mon_logo.svg');
  }


}