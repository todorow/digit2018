import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {MapComponent} from "./components/map/map.component";
import {EventsComponent} from "./components/events/events.component";
import {HeroesComponent} from "./components/heroes/heroes.component";

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home'
  },
  {path:'home',component:MapComponent},
  {path:'detect',component:MapComponent},
  {path:'event',component:EventsComponent},
  {path:'heroes',component:HeroesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
