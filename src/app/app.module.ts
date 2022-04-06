import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { FooterComponent } from './shared/footer/footer.component';
import { HeaderComponent } from './shared/header/header.component';
import { NosotrosComponent } from './components/nosotros/nosotros.component';
import { ListaServiciosComponent } from './components/lista-servicios/lista-servicios.component';
import { ServicioXComponent } from './components/servicio-x/servicio-x.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { CrudAdminComponent } from './components/crud-admin/crud-admin.component';
import { ContactosComponent } from './components/contactos/contactos.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { LoginAdminComponent } from './components/login-admin/login-admin.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    FooterComponent,
    HeaderComponent,
    NosotrosComponent,
    ListaServiciosComponent,
    ServicioXComponent,
    PageNotFoundComponent,
    CrudAdminComponent,
    ContactosComponent,
    LoginAdminComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxPaginationModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
