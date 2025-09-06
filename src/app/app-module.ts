import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { AdminTemplate } from './admin-template/admin-template';
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatButtonModule, MatIconButton} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatMenuModule, MatMenuTrigger} from '@angular/material/menu';
import {MatDrawer, MatDrawerContainer, MatDrawerContent} from '@angular/material/sidenav';
import {MatDivider, MatListItem, MatNavList} from '@angular/material/list';
import { Dashboard } from './dashboard/dashboard';
import { Students } from './students/students';
import { Payments } from './payments/payments';
import { Home } from './home/home';
import { Login } from './login/login';
import { Profile } from './profile/profile';
import {MatCard, MatCardHeader, MatCardModule} from '@angular/material/card';
import { LoadStudents } from './load-students/load-students';
import { LoadPayments } from './load-payments/load-payments';
import {MatCell, MatColumnDef, MatHeaderCell, MatTable, MatTableModule} from '@angular/material/table';
import {MatSort, MatSortModule} from '@angular/material/sort';
import {MatDividerModule} from '@angular/material/divider';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatFormField, MatInput, MatInputModule, MatLabel} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatCheckbox, MatCheckboxModule} from '@angular/material/checkbox';
import {AuthGuard} from './guards/auth-guard';
import { StudentDetails } from './student-details/student-details';
import { NewPayment } from './new-payment/new-payment';
import {MatDialogModule} from '@angular/material/dialog';
import {MatNativeDateModule, MatOptionModule} from '@angular/material/core';
import {MatSelectModule} from '@angular/material/select';
import {
  MatDatepicker,
  MatDatepickerInput,
  MatDatepickerModule,
  MatDatepickerToggle
} from '@angular/material/datepicker';
import {PdfViewerModule} from 'ng2-pdf-viewer';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';

@NgModule({
  declarations: [
    App,
    AdminTemplate,
    Dashboard,
    Students,
    Payments,
    Home,
    Login,
    Profile,
    LoadStudents,
    LoadPayments,
    StudentDetails,
    NewPayment
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatMenuTrigger,
    MatMenuModule,
    MatDrawerContainer,
    MatNavList,
    MatListItem,
    MatDrawer,
    MatDrawerContent,
    MatCardModule,
    MatCardHeader,
    MatDividerModule,
    MatTableModule,
    MatHeaderCell,
    MatColumnDef,
    MatCheckbox,
    MatCheckboxModule,
    MatCell,
    MatSortModule,
    MatPaginatorModule,
    MatInputModule,
    MatFormFieldModule,
    MatLabel,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    MatDialogModule,
    MatOptionModule,
    MatSelectModule,
    MatDatepickerToggle,
    MatDatepickerInput,
    MatDatepickerModule,
    MatNativeDateModule,
    PdfViewerModule,
    MatProgressSpinnerModule

  ],
  providers: [
    provideBrowserGlobalErrorListeners()
  ],
  bootstrap: [App]
})
export class AppModule { }
