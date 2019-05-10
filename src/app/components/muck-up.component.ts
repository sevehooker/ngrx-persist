import { Component, Input, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "muck-up-C",
  template: `
    <p>{{ list | json }}</p>
    <button (click)="push.emit()">Push</button>
    <button (click)="pop.emit()">Pop</button>
    <a routerLink="/persist">Go</a>
  `
})
export class MuckUpComponent {
  @Input() list = <object[]>[];
  @Output() push = new EventEmitter();
  @Output() pop = new EventEmitter();
}
