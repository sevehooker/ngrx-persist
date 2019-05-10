import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { MuckUpContainer } from "./components/muck-up.container";
import { PersistContainer } from "./components/persist.container";

const appRoutes: Routes = [
  { path: "", component: MuckUpContainer },
  { path: "persist", component: PersistContainer }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
