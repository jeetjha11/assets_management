import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  assets = [
    { id: 1, name: 'Asset 1', type: 'Type 1', description: 'This is asset 1' },
    { id: 2, name: 'Asset 2', type: 'Type 2', description: 'This is asset 2' },
    { id: 3, name: 'Asset 3', type: 'Type 3', description: 'This is asset 3' },
    { id: 4, name: 'Asset 4', type: 'Type 4', description: 'This is asset 4' },
    { id: 5, name: 'Asset 5', type: 'Type 5', description: 'This is asset 5' }
  ];

  reviews = [
    { id: 1, name: 'John Doe', date: '01/01/2022', comment: 'This is a great app!' },
    { id: 2, name: 'Jane Doe', date: '02/01/2022', comment: 'I love this app!' },
    { id: 3, name: 'Bob Smith', date: '03/01/2022', comment: 'This app is amazing!' }
  ];

  customerCount = 1000; 

}
