import { Component } from '@angular/core';

import { PoMenuItem } from '@po-ui/ng-components';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: false,
})
export class AppComponent {
  readonly menus: Array<PoMenuItem> = [
    {
      label: 'Home',
      icon: 'an an-house-line',
      link: '/home',
      shortLabel: 'Home',
    },
    {
      label: 'Person',
      icon: 'an an-user',
      link: '/person',
      shortLabel: 'Person',
    },
  ];
}
