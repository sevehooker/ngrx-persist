import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { MuckUpContainer } from "./components/muck-up.container";
import { PersistComponent } from "./components/persist.component";
import { PersistContainer } from "./components/persist.container";
import { MuckUpComponent } from "./components/muck-up.component";
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  imports: [BrowserModule, FormsModule, AppRoutingModule],
  declarations: [
    AppComponent,
    MuckUpComponent,
    MuckUpContainer,
    PersistComponent,
    PersistContainer
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
