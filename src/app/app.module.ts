import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { Routes, RouterModule } from "@angular/router";
import { AppComponent } from "./app.component";
import { HeaderComponent } from "./components/header/header.component";
import { ViewComponent } from "./components/view/view.component";
import { GridComponent } from "./components/view/grid/grid.component";
import { ListComponent } from "./components/view/list/list.component";
import { ListTileComponent } from "./components/view/list/list-tile/list-tile.component";
import { GridTileComponent } from "./components/view/grid/grid-tile/grid-tile.component";

const appRoutes: Routes = [
  {
    path: "view",
    children: [
      {
        path: "grid",
        component: GridComponent
      },
      {
        path: "list",
        component: ListComponent
      }
    ]
  } ,
  {
    path: "**",
    redirectTo: "view/grid",
    pathMatch: "full"
  }

 /*  {
    path: "view/grid", component: GridComponent
  },
  {
    path: "view/list", component: ListComponent
  } */
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ViewComponent,
    GridComponent,
    ListComponent,
    ListTileComponent,
    GridTileComponent
  ],
  imports: [BrowserModule, HttpClientModule, RouterModule.forRoot(appRoutes)],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
