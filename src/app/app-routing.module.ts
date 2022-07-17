import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddCurrencyRateComponent } from './components/currency-rate/add-currency-rate/add-currency-rate.component';
import { DisplayCurrencyRateComponent } from './components/currency-rate/display-currency-rate/display-currency-rate.component';
import { EditCurrencyRateComponent } from './components/currency-rate/edit-currency-rate/edit-currency-rate.component';
import { AddCurrencyComponent } from './components/currency/add-currency/add-currency.component';
import { DisplayCurrencyComponent } from './components/currency/display-currency/display-currency.component';
import { EditCurrencyComponent } from './components/currency/edit-currency/edit-currency.component';
import { AddDepartmentComponent } from './components/department/add-department/add-department.component';
import { DisplayDepartmentsComponent } from './components/department/display-departments/display-departments.component';
import { EditDepartmentComponent } from './components/department/edit-department/edit-department.component';
import { AddLedgerReportGroupComponent } from './components/ledger-report-group/add-ledger-report-group/add-ledger-report-group.component';
import { DisplayLedgerReportGroupsComponent } from './components/ledger-report-group/display-ledger-report-groups/display-ledger-report-groups.component';
import { EditLedgerReportGroupComponent } from './components/ledger-report-group/edit-ledger-report-group/edit-ledger-report-group.component';
import { AddTransactionCodeComponent } from './components/transaction-code/add-transaction-code/add-transaction-code.component';
import { DisplayTransactionCodeComponent } from './components/transaction-code/display-transaction-code/display-transaction-code.component';
import { EditTransactionCodeComponent } from './components/transaction-code/edit-transaction-code/edit-transaction-code.component';

const routes: Routes = [
  {
    path: 'display-currency-rate',
    component: DisplayCurrencyRateComponent
  },
  {
    path: 'add-currency-rate',
    component: AddCurrencyRateComponent
  },
  {
    path: 'edit-currency-rate/:id',
    component: EditCurrencyRateComponent
  },
  {
    path: 'display-currency',
    component: DisplayCurrencyComponent
  },
  {
    path: 'add-currency',
    component: AddCurrencyComponent
  },
  {
    path: 'edit-currency/:id',
    component: EditCurrencyComponent
  },
  {
    path: 'display-transaction-code',
    component: DisplayTransactionCodeComponent
  },
  {
    path: 'add-transaction-code',
    component: AddTransactionCodeComponent
  },
  {
    path: 'edit-transaction-code/:id',
    component: EditTransactionCodeComponent
  },
  {
    path: 'display-department',
    component: DisplayDepartmentsComponent
  },
  {
    path: 'add-department',
    component: AddDepartmentComponent
  },
  {
    path: 'edit-department/:id',
    component: EditDepartmentComponent
  },
  {
    path: 'display-ledger-report-group',
    component: DisplayLedgerReportGroupsComponent
  },
  {
    path: 'add-ledger-report-group',
    component: AddLedgerReportGroupComponent
  },
  {
    path: 'edit-ledger-report-group/:id',
    component: EditLedgerReportGroupComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
