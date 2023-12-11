import { Route } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PatientComponent } from './pages/patient/patient.component';
import { DoctorComponent } from './pages/doctor/doctor.component';
import { ListPatientComponent } from './pages/patient/list/list.component';
import { CreatePatientComponent } from './pages/patient/create/create.component';
import { CreateDoctorComponent } from './pages/doctor/create/create.component';
import { ListDoctorComponent } from './pages/doctor/list/list.component';
import { AppointmentComponent } from './pages/appointment/appointment.component';
import { CreateAppointmentComponent } from './pages/appointment/create/create.component';
import { ListAppointmentComponent } from './pages/appointment/list/list.component';
import { CalendarComponent } from './pages/appointment/scheduler-candeler/calender.component';
import { TabletimeComponent } from './pages/appointment/table-time/tabletime.component';
import { ListAppointmentRequestComponent } from './pages/appointment/request-appointment/list.component';

export const appRoutes: Route[] = [
    // { path: '', redirectTo: 'dashbroad', pathMatch: 'full' },

    { path: 'dashbroad', component: DashboardComponent },
    {
        path: 'patient',
        component: PatientComponent,
        children: [
            { path: 'list', component: ListPatientComponent },
            { path: 'create', component: CreatePatientComponent },
            { path: 'edit/:id', component: CreatePatientComponent }
        ]
    },

    {
        path: 'doctor',
        component: DoctorComponent,
        children: [
            { path: 'list', component: ListDoctorComponent },
            { path: 'create', component: CreateDoctorComponent },
            { path: 'edit/:id', component: CreateDoctorComponent }
        ]
    },

    {
        path: 'appointment',
        component: AppointmentComponent,
        children: [
            { path: 'list', component: ListAppointmentComponent },
            { path: 'create', component: CreateAppointmentComponent },
            { path: 'calendar', component: CalendarComponent },
            { path: 'edit/:id', component: CreateAppointmentComponent },
            { path: 'tabletime', component: TabletimeComponent },
            { path: 'requestappointment', component: ListAppointmentRequestComponent }
        ]
    }
];
