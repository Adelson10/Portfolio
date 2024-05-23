import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ApresentacaoComponent } from './apresentacao/apresentacao.component';
import { SobreMimComponent } from './sobre-mim/sobre-mim.component';
import { HabilidadesComponent } from './habilidades/habilidades.component';
import { ServicosComponent } from './servicos/servicos.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule } from '@angular/material/dialog';
import { DialogServiceComponent } from './servicos/dialog-service/dialog-service.component';
import { MatButtonModule } from '@angular/material/button';
import { QualificacoesComponent } from './qualificacoes/qualificacoes.component';
import { TimeLineComponent } from './qualificacoes/time-line/time-line.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ApresentacaoComponent,
    SobreMimComponent,
    HabilidadesComponent,
    ServicosComponent,
    DialogServiceComponent,
    QualificacoesComponent,
    TimeLineComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatDialogModule,
    MatButtonModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
