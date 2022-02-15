import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-for',
  templateUrl: './ng-for.component.html',
  styleUrls: ['./ng-for.component.scss']
})
export class NgForComponent implements OnInit {

  constructor() { }
  countrydetails:any[]=[
    {
      'Country':'India',
    },

    {
      'Country':'pakistan',
    
      'people':[
        {
          "name":"sukanya"
        },
        {
          "name":"rupali"
        },
        {
          "name":"Priya"
        },
        {
          "name":"prajkta"
        }
      ]
    }
  ]
  ngOnInit(): void {
  }

}
