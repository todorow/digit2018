import {BrowserModule} from '@angular/platform-browser';
import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import {AgmCoreModule, GoogleMapsAPIWrapper} from '@agm/core';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {MapComponent} from './components/map/map.component';
import {FormsModule} from '@angular/forms';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {NavComponent} from './components/nav/nav.component';
import {EventsComponent} from './components/events/events.component';
import {EventFormComponent} from './components/events/event-form/event-form.component';
import {InfoSideComponent} from "./components/info-side/info-side.component";
import {ModalBasicComponent} from "./components/modal-basic/modal-basic.component";
import { HeroesComponent } from './components/heroes/heroes.component';
import {FontAwesomeModule} from "@fortawesome/angular-fontawesome";
import { ProblemformComponent } from './components/problemform/problemform.component';
import { ModalRegistrationComponent } from './components/modal-basic/modal-registration/modal-registration.component';
import { ModalSingupComponent } from './components/modal-basic/modal-singup/modal-singup.component';
import { ModalAddProblemComponent } from './components/modal-basic/modal-add-problem/modal-add-problem.component';



@NgModule({
  declarations: [
    AppComponent,
    MapComponent,
    NavComponent,
    InfoSideComponent,
    ModalBasicComponent,
    EventsComponent,
    EventFormComponent,
    HeroesComponent,
    ProblemformComponent,
    ModalRegistrationComponent,
    ModalSingupComponent,
    ModalAddProblemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AgmCoreModule.forRoot({apiKey: 'AIzaSyCFYX9It5a3BkRXPtlb243kpkz9QEs37R8'}), // <---
    FormsModule, // <---
    NgbModule.forRoot(),
    FontAwesomeModule// <---
  ],
  providers: [
    GoogleMapsAPIWrapper // <---
  ],
  bootstrap: [AppComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class AppModule {
}
