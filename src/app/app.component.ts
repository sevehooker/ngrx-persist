import { Component } from '@angular/core';
import { mergeDeep } from './helpers';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent {
  mergeDeep = mergeDeep;
  a = [
    { id: '1', val: 2 },
    { id: '2', val: 4, blah: 'buh' }
  ];

  b = [
    { id: '2', val: 23, blah: 'whohah' },
    { id: '3', val: 3 },
    { id: '1', jim: '1', val: 1 }
  ];
}
