import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  users =[ 
    { 
      id: 1,
      name: 'Ahmed Ramadan'
    },
    { 
      id: 2,
      name: 'Abdallah Fathy'
    },
    { 
      id: 3,
      name: 'Omar Ali'
    },
  ];

  constructor() { }

  ngOnInit() {
  }

}
