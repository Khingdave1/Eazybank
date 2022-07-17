import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { PaginatorModule } from 'primeng/paginator';
import { DisplayCurrencyRateComponent } from './components/currency-rate/display-currency-rate/display-currency-rate.component';
import { AddCurrencyRateComponent } from './components/currency-rate/add-currency-rate/add-currency-rate.component';
// import { ToastrModule } from 'ngx-toastr';
import { ToastModule } from 'primeng/toast';
import { CalendarModule } from 'primeng/calendar';
import { SliderModule } from 'primeng/slider';
import { MultiSelectModule } from 'primeng/multiselect';
import { ContextMenuModule } from 'primeng/contextmenu';
import { DialogModule } from 'primeng/dialog';
import { DropdownModule } from 'primeng/dropdown';
import { ProgressBarModule } from 'primeng/progressbar';
import { InputTextModule } from 'primeng/inputtext';
import { PanelModule } from 'primeng/panel';
import { ToolbarModule } from 'primeng/toolbar';
import { ConfirmationService, MessageService } from 'primeng/api';
import { MenubarModule } from 'primeng/menubar';
import { InputSwitchModule } from 'primeng/inputswitch';
import { AddCurrencyComponent } from './components/currency/add-currency/add-currency.component';
import { DisplayCurrencyComponent } from './components/currency/display-currency/display-currency.component';
import { EditCurrencyComponent } from './components/currency/edit-currency/edit-currency.component';
import { EditCurrencyRateComponent } from './components/currency-rate/edit-currency-rate/edit-currency-rate.component';
import { DisplayTransactionCodeComponent } from './components/transaction-code/display-transaction-code/display-transaction-code.component';
import { AddTransactionCodeComponent } from './components/transaction-code/add-transaction-code/add-transaction-code.component';
import { EditTransactionCodeComponent } from './components/transaction-code/edit-transaction-code/edit-transaction-code.component';
import { DisplayDepartmentsComponent } from './components/department/display-departments/display-departments.component';
import { AddDepartmentComponent } from './components/department/add-department/add-department.component';
import { EditDepartmentComponent } from './components/department/edit-department/edit-department.component';
import { AddLedgerReportGroupComponent } from './components/ledger-report-group/add-ledger-report-group/add-ledger-report-group.component';
import { EditLedgerReportGroupComponent } from './components/ledger-report-group/edit-ledger-report-group/edit-ledger-report-group.component';
import { DisplayLedgerReportGroupsComponent } from './components/ledger-report-group/display-ledger-report-groups/display-ledger-report-groups.component';

@NgModule({
  declarations: [
    AppComponent,
    DisplayCurrencyRateComponent,
    AddCurrencyRateComponent,
    AddCurrencyComponent,
    DisplayCurrencyComponent,
    EditCurrencyComponent,
    EditCurrencyRateComponent,
    DisplayTransactionCodeComponent,
    AddTransactionCodeComponent,
    EditTransactionCodeComponent,
    DisplayDepartmentsComponent,
    AddDepartmentComponent,
    EditDepartmentComponent,
    AddLedgerReportGroupComponent,
    EditLedgerReportGroupComponent,
    DisplayLedgerReportGroupsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ButtonModule,
    TableModule,
    PaginatorModule,
    FormsModule,
    ReactiveFormsModule,
    ToastrModule.forRoot(),
  ],
  providers: [MessageService, ConfirmationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
