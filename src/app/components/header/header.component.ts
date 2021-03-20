import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  public name:string;
  constructor() {
    this.name = "Mohamed Abd El Sttar";
   }

  ngOnInit(): void {
  }

}
