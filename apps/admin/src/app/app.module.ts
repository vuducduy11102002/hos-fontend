import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { appRoutes } from './app.routes';
import { BodyComponent } from './body/body.component';
import { SideNavComponent } from './side-nav/side-nav.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PatientComponent } from './pages/patient/patient.component';
import { AppointmentComponent } from './pages/appointment/appointment.component';
import { DoctorComponent } from './pages/doctor/doctor.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SublevelMenuComponent } from './side-nav/sublevel-menu.component';
import { HeaderComponent } from './header/header.component';
import { OverlayModule } from '@angular/cdk/overlay';
import { CdkMenuModule } from '@angular/cdk/menu';
import { ListPatientComponent } from './pages/patient/list/list.component';
import { CreatePatientComponent } from './pages/patient/create/create.component';
import { CreateDoctorComponent } from './pages/doctor/create/create.component';
import { ListDoctorComponent } from './pages/doctor/list/list.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CreateAppointmentComponent } from './pages/appointment/create/create.component';
import { ListAppointmentComponent } from './pages/appointment/list/list.component';
import { AppointmentModule } from './pages/appointment/appointments.module';
import { ListAppointmentRequestComponent } from './pages/appointment/request-appointment/list.component';
import { LibsUserModule } from '@hospital/user';
// Component PRIMENG
import { ToolbarModule } from 'primeng/toolbar';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { SplitButtonModule } from 'primeng/splitbutton';
import { TableModule } from 'primeng/table';
import { PatientService } from '@hospital/libs/services';
import { InputTextModule } from 'primeng/inputtext';
import { DropdownModule } from 'primeng/dropdown';
import { ToastModule } from 'primeng/toast';
import { ConfirmationService, MessageService } from 'primeng/api';
import { RadioButtonModule } from 'primeng/radiobutton';
import { CalendarModule } from 'primeng/calendar';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { DialogModule } from 'primeng/dialog';
import { SidebarModule } from 'primeng/sidebar';
import { NotificationComponent } from './side-nav/notification.component';

const UX_MODULE = [
  CardModule,
  ToolbarModule,
  ButtonModule,
  SplitButtonModule,
  TableModule,
  InputTextModule,
  DropdownModule,
  ToastModule,
  RadioButtonModule,
  CalendarModule,
  ConfirmDialogModule,
  DialogModule,
  SidebarModule,
];

@NgModule({
  declarations: [
    AppComponent,
    BodyComponent,
    SideNavComponent,
    DashboardComponent,
    PatientComponent,
    AppointmentComponent,
    DoctorComponent,
    SublevelMenuComponent,
    HeaderComponent,
    ListPatientComponent,
    CreatePatientComponent,
    ListDoctorComponent,
    CreateDoctorComponent,
    ListAppointmentComponent,
    CreateAppointmentComponent,
    ListAppointmentRequestComponent,
    NotificationComponent,
  ],
  imports: [
    ...UX_MODULE,
    BrowserModule,
    BrowserAnimationsModule,
    OverlayModule,
    CdkMenuModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AppointmentModule,
    RouterModule.forRoot(appRoutes, { initialNavigation: 'enabledBlocking' }),
    //Login
    LibsUserModule,
  ],
  providers: [PatientService, MessageService, ConfirmationService],
  bootstrap: [AppComponent],
  exports: [
    BodyComponent,
    SideNavComponent,
    DashboardComponent,
    PatientComponent,
    AppointmentComponent,
    DoctorComponent,
    HeaderComponent,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule {}
