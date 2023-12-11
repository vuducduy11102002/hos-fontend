import { INavbarData } from './helper';

export const navbarData: INavbarData[] = [
    {
        routeLink: 'dashbroad',
        icon: 'fi fi-rs-house-chimney',
        label: 'Dashbroad'
    },
    {
        routeLink: 'patient',
        icon: 'fi fi-rr-procedures',
        label: 'Patient',
        items: [
            {
                routeLink: 'patient/list',
                label: 'List patient'
            },
            {
                routeLink: 'patient/create',
                label: 'Create patient'
            }
        ]
    },
    {
        routeLink: 'doctor',
        icon: 'fi fi-rr-user-md',
        label: 'Doctor',
        items: [
            {
                routeLink: 'doctor/list',
                label: 'List doctor'
            },
            {
                routeLink: 'doctor/create',
                label: 'Create doctor'
            }
        ]
    },
    {
        routeLink: 'appointment',
        icon: 'fi fi-rr-calendar-clock',
        label: 'Appointment',
        items: [
            {
                routeLink: 'appointment/list',
                label: 'List appointment'
            },
            {
                routeLink: 'appointment/create',
                label: 'Create appointment'
            },
            {
                routeLink: 'appointment/calendar',
                label: 'Scheduler'
            },
            {
                routeLink: 'appointment/tabletime',
                label: 'Table Time'
            },
            {
                routeLink: 'appointment/requestappointment',
                label: 'Request Appointment'
            }
        ]
    }
];
