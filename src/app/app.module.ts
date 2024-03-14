import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

//Importaciones AngularMaterial
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { PrincipalComponent } from './components/principal/principal.component';
import { UsuariosComponent } from './components/usuarios/usuarios.component';
import { InfoComponent } from './components/info/info.component';
import { TramitesComponent } from './components/tramites/tramites.component';
import { SpashscreenComponent } from './components/spashscreen/spashscreen.component';
import {MatCardModule} from '@angular/material/card';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatSelectModule} from '@angular/material/select';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatStepperModule} from '@angular/material/stepper';
import {MatDividerModule} from '@angular/material/divider';
import {MatRippleModule} from '@angular/material/core';
import {MatBottomSheetModule} from '@angular/material/bottom-sheet';
import { SharedPageComponent } from './components/shared-page/shared-page.component';
import {MatInputModule} from '@angular/material/input';
import {MatListModule} from '@angular/material/list';
import {MatIconModule} from '@angular/material/icon';

import { ReactiveFormsModule } from '@angular/forms';




@NgModule({
  declarations: [
    AppComponent,
    PrincipalComponent,
    UsuariosComponent,
    InfoComponent,
    TramitesComponent,
    SpashscreenComponent,
    SharedPageComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatProgressSpinnerModule,
    MatCardModule,
    MatToolbarModule,
    MatButtonModule,
    MatSelectModule,
    MatGridListModule,
    MatStepperModule,
    MatDividerModule,
    MatRippleModule,
    MatBottomSheetModule,
    MatListModule,
    MatIconModule,
    ReactiveFormsModule,
    MatInputModule
  ],
  exports:[
    MatProgressSpinnerModule,
    MatCardModule,
    MatToolbarModule,
    MatButtonModule,
    MatSelectModule,
    MatGridListModule,
    MatStepperModule,
    MatDividerModule,
    MatBottomSheetModule,
    MatRippleModule,
    MatListModule,
    MatIconModule,
    ReactiveFormsModule,
    MatInputModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
