import { Component, OnInit } from '@angular/core';






import {
  trigger,
  state,
  style,
  animate,
  transition,
  // ...
} from '@angular/animations';

export interface Tile {
  color: string;
  cols: number;
  rows: number;
  text: string;
  url: string;
}


@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css'],
  animations: [
    // animation triggers go here
  ]
})


export class BodyComponent implements OnInit {
  color = 'yellow';
  tiles: Tile[] = [
    {text: 'One', cols: 1, rows: 1, color: 'lightblue',url: "../../../assets/images/logos/java.png"},
    {text: 'Two', cols: 1, rows: 1, color: 'lightgreen',url: "../../../assets/images/logos/android.png"},
    {text: 'Three', cols: 1, rows: 1, color: 'lightpink',url: "../../../assets/images/logos/html.png"},
    {text: 'Four', cols: 1, rows: 1, color: '#DDBDF1',url: "../../../assets/images/logos/laravel.png"},
    {text: 'One', cols: 1, rows: 1, color: 'lightblue',url: "../../../assets/images/logos/mysql.png"},
    {text: 'Two', cols: 1, rows: 1, color: 'lightgreen',url: "../../../assets/images/logos/php.png"},
   
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
