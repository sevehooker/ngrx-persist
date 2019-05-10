import { Component, Input, Output } from "@angular/core";
import { mergeDeep } from "../helpers";
import { EventEmitter } from "selenium-webdriver";

@Component({
  selector: "persist-C",
  template: `
    <p>{{ mergeDeep(list) | json }}</p>
    <button click="save.emit">Save</button>
  `
})
export class PersistComponent {
  @Input() list = <object[]>[];
  @Output() save = new EventEmitter();

  mergeDeep = mergeDeep;
}
