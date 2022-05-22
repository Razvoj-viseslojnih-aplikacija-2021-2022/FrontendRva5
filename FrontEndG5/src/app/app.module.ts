import { VoziloComponent } from './components/primer-components/vozilo/vozilo.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatExpansionModule} from '@angular/material/expansion';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AutomobilComponent } from './components/primer-components/automobil/automobil.component';
import { AuthorComponent } from './components/core/author/author.component';
import { HomeComponent } from './component/core/home/home.component';
import { AboutComponent } from './components/core/about/about.component';
import { ArtiklComponent } from './components/model/artikl/artikl.component';
import { DobavljacComponent } from './components/model/dobavljac/dobavljac.component';
import { PorudzbinaComponent } from './components/model/porudzbina/porudzbina.component';
import { StavkaPorudzbineComponent } from './components/model/stavka-porudzbine/stavka-porudzbine.component';

@NgModule({
  declarations: [
    AppComponent,
    VoziloComponent,
    AutomobilComponent,
    AuthorComponent,
    HomeComponent,
    AboutComponent,
    ArtiklComponent,
    DobavljacComponent,
    PorudzbinaComponent,
    StavkaPorudzbineComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatButtonModule,
    MatIconModule,
    MatSidenavModule,
    MatListModule,
    MatGridListModule,
    MatExpansionModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
