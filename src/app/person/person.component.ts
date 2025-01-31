import { Component, OnInit } from '@angular/core';

import { PoPageDynamicTableActions } from '@po-ui/ng-templates';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.css'],
  standalone: false
})
export class PersonComponent implements OnInit {

  // PLEASE ADD THE API URL SERVICE HERE
  readonly apiService = 'http://localhost:8080/api';

  readonly actions: PoPageDynamicTableActions = { };

  constructor() { }

  ngOnInit() { }

}
