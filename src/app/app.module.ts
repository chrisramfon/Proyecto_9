import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';


import { AppRoutingModule } from './app.routing';
import { ComponentsModule } from './components/components.module';

import { AppComponent } from './app.component';

import { DashboardComponent } from './dashboard/dashboard.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { TableListComponent } from './table-list/table-list.component';
import { TypographyComponent } from './typography/typography.component';
import { IconsComponent } from './icons/icons.component';
import { MapsComponent } from './maps/maps.component';
import { NotificationsComponent } from './notifications/notifications.component';
import { UpgradeComponent } from './upgrade/upgrade.component';



import {
  AgmCoreModule
} from '@agm/core';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { IniciosesionComponent } from './iniciosesion/iniciosesion.component';
import { LoginService } from './services/login.service';
import { AgregarclienteComponent } from './agregarcliente/agregarcliente.component';
import { ListaclienteComponent } from './listacliente/listacliente.component';
import { EditarclienteComponent } from './editarcliente/editarcliente.component';
import { ListaAdeudoComponent } from './lista-adeudo/lista-adeudo.component';
import { AdeudoService } from './services/adeudo.service';
import { ClienteService } from './services/cliente.service';

@NgModule({
  imports: [
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    ComponentsModule,
    RouterModule,
    AppRoutingModule,
    AgmCoreModule.forRoot({
      apiKey: 'YOUR_GOOGLE_MAPS_API_KEY'
    })
  ],
  declarations: [
    AppComponent,
    AdminLayoutComponent,
    IniciosesionComponent,
    ListaAdeudoComponent

  ],
  providers: [
    LoginService,
    ClienteService,
    AdeudoService

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
