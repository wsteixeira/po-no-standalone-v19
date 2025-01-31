import { Component, OnInit } from '@angular/core';

import { PoPageDynamicTableActions } from '@po-ui/ng-templates';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.css'],
  standalone: false,
})
export class PersonComponent implements OnInit {
  readonly apiService = 'https://po-sample-api.onrender.com/v1/people';

  readonly actions: PoPageDynamicTableActions = {};

  constructor() {}

  ngOnInit() {}
}
