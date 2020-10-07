import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StatefulComponent } from './stateful/stateful.component';
import { StatelessComponent } from './stateless/stateless.component';
import { ConfirmComponent } from './confirm/confirm.component';
import { StatusCartComponent } from './status-cart/status-cart.component';
import { FormularioprimeroComponent } from './formularioprimero/formularioprimero.component';
import { FormulariosegundoComponent } from './formulariosegundo/formulariosegundo.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    StatefulComponent,
    StatelessComponent,
    ConfirmComponent,
    StatusCartComponent,
    FormularioprimeroComponent,
    FormulariosegundoComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
