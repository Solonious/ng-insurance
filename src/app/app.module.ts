import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { RoutingModule } from './router/routing/routing.module';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';


import { AppComponent } from './app.component';
import { MainComponent } from './components/main/main.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { ClientComponent } from './components/client/client.component';
import { PropousalComponent } from './components/propousal/propousal.component';
import { CountsComponent } from './components/counts/counts.component';
import { EnsuranceComponent } from './components/ensurance/ensurance.component';
import { PaymentsComponent } from './components/payments/payments.component';
import { ContractsComponent } from './components/contracts/contracts.component';
import { DocumentsComponent } from './components/documents/documents.component';
import { TabContentComponent } from './components/tab-content/tab-content.component';
import { MyCarsComponent } from './components/main/my-cars/my-cars.component';
import { CascoComponent } from './components/main/casco/casco.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    HeaderComponent,
    FooterComponent,
    ClientComponent,
    PropousalComponent,
    CountsComponent,
    EnsuranceComponent,
    PaymentsComponent,
    ContractsComponent,
    DocumentsComponent,
    TabContentComponent,
    MyCarsComponent,
    CascoComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    RoutingModule,
    NgbModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
