import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ApresentacaoComponent } from './apresentacao/apresentacao.component';
import { SobreMimComponent } from './sobre-mim/sobre-mim.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ApresentacaoComponent,
    SobreMimComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
