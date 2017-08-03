import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MainComponent } from '../../components/main/main.component';
import { ClientComponent } from '../../components/client/client.component';
import { ContractsComponent} from '../../components/contracts/contracts.component';
import { CountsComponent } from '../../components/counts/counts.component';
import { EnsuranceComponent } from '../../components/ensurance/ensurance.component';
import { PaymentsComponent } from '../../components/payments/payments.component';
import { PropousalComponent } from '../../components/propousal/propousal.component';
import { DocumentsComponent } from '../../components/documents/documents.component';

const routes: Routes = [
    { path: '', redirectTo: '/main', pathMatch: 'full' },
    { path: 'main',  component: MainComponent },
    { path: 'client',  component: ClientComponent },
    { path: 'contracts',  component: ContractsComponent },
    { path: 'counts',  component: CountsComponent },
    { path: 'ensurance',  component: EnsuranceComponent },
    { path: 'payments',  component: PaymentsComponent },
    { path: 'propousal',  component: PropousalComponent },
    { path: 'documents',  component: DocumentsComponent },
];

@NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule ]
})
export class RoutingModule {}
