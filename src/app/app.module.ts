import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { MuckUpComponent } from "./components/muck-up.component";
import { MuckUpContainer } from "./components/muck-up.container";
import { PersistComponent } from "./components/persist.component";
import { PersistContainer } from "./components/persist.container";
import { AppRoutingModule } from './app-routing.module';
import { StoreModule } from "@ngrx/store";
import { reducer } from "./store/reducer";

@NgModule({
  imports: [BrowserModule, FormsModule, AppRoutingModule,
    StoreModule.forRoot({ state: reducer })],
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
