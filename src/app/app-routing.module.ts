import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {MapComponent} from "./components/map/map.component";
import {EventsComponent} from "./components/events/events.component";
import {HeroesComponent} from "./components/heroes/heroes.component";
import {EventFormComponent} from "./components/events/event-form/event-form.component";

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home'
  },
  {path:'home',component:MapComponent},
  {path:'detect',component:MapComponent},
  {path:'events',component:EventsComponent},
  {path:'heroes',component:HeroesComponent},
  {path:'events/add',component:EventFormComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
