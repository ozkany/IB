import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccountsRoutingModule } from './accounts-routing.module';

import { AccountListComponent } from './account-list/account-list.component';
import { AccountActivitiesComponent } from './account-activities/account-activities.component';
import { ReceiptComponent } from './receipt/receipt.component';
import { AccountDetailComponent } from './account-detail/account-detail.component';
import { RecentTransfersComponent } from './recent-transfers/recent-transfers.component';
import { AssetsComponent } from './assets/assets.component';
import { GooglePieChartComponent } from 'src/app/misc/google-charts/google-pie-chart/google-pie-chart.component';
import { ScriptLoaderService } from 'src/app/_core/services/script-loader.service';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    AccountListComponent,
    AccountActivitiesComponent,
    ReceiptComponent,
    AccountDetailComponent,
    RecentTransfersComponent,
    AssetsComponent,
    GooglePieChartComponent
  ],
  imports: [
    CommonModule,
    AccountsRoutingModule,
    SharedModule
  ],
  providers: []
})
export class AccountsModule { }
