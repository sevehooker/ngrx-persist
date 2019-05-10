import { Component, Input, Output, EventEmitter } from "@angular/core";
import { mergeDeep } from "../helpers";

@Component({
  selector: "persist-C",
  template: `
    <p>{{ mergeDeep(list) | json }}</p>
    <button click="save.emit">Save</button>
    <a routerLink="/">Go</a>    
  `
})
export class PersistComponent {
  @Input() list = <object[]>[];
  @Output() save = new EventEmitter();

  mergeDeep = mergeDeep;
}
