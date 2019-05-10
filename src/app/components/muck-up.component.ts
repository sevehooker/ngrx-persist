import { Component, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "muck-up",
  template: `
    <button (click)="(push.emit)">Push</button>
    <button (click)="(pop.emit)">Pop</button>
    <a routerLink="/persist">Go</a>
  `
})
export class MuckUpComponent {
  @Output() push = new EventEmitter();
  @Output() pop = new EventEmitter();
}
