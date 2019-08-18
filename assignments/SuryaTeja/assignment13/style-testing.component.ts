import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-style-testing',
  templateUrl: './style-testing.component.html',
  styleUrls: ['./style-testing.component.css']
})
export class StyleTestingComponent implements OnInit {

  constructor() { }

  
  prop={ color: "blue" };

  ngOnInit() {
  }

}
