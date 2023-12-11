import { Component, EventEmitter, HostListener, OnInit, Output } from '@angular/core';
import { navbarData } from './nav-data';
import { animate, keyframes, style, transition, trigger } from '@angular/animations';
import { INavbarData } from './helper';
import { Router } from '@angular/router';

interface SideNavToggle {
    screenWidth: number;
    collapsed: boolean;
}

@Component({
    selector: 'hospital-side-nav',
    templateUrl: './side-nav.component.html',
    animations: [
        trigger('fadeInOut', [
            transition(':enter', [style({ opacity: 0 }), animate('350ms', style({ opacity: 1 }))]),
            transition(':leave', [style({ opacity: 1 }), animate('350ms', style({ opacity: 0 }))])
        ]),
        trigger('rotate', [
            transition(':enter', [
                animate('1000ms', keyframes([style({ transform: 'rotate(0deg)', offset: '0' }), style({ transform: 'rotate(2turn)', offset: '1' })]))
            ])
        ])
    ]
})
export class SideNavComponent implements OnInit {
    @Output() OnToggleSideNav: EventEmitter<SideNavToggle> = new EventEmitter();
    collapsed = false;
    navData = navbarData;
    screenWidth = 0;
    multiple = false;
    hoverActive = false; // Biến để theo dõi trạng thái hover

    @HostListener('window:resize', ['$event'])
    onResize() {
        this.screenWidth = window.innerWidth;
        if (this.screenWidth <= 768) {
            this.collapsed = false;
            this.OnToggleSideNav.emit({ collapsed: this.collapsed, screenWidth: this.screenWidth });
        }
    }

    constructor(public router: Router) {}

    ngOnInit(): void {
        this.screenWidth = window.innerWidth;
    }

    toggleCollapse(): void {
        this.collapsed = !this.collapsed;
        this.OnToggleSideNav.emit({ collapsed: this.collapsed, screenWidth: this.screenWidth });
    }

    closeSidenav(): void {
        this.collapsed = false;
        this.OnToggleSideNav.emit({ collapsed: this.collapsed, screenWidth: this.screenWidth });
    }

    handleClick(item: INavbarData): void {
        if (!this.multiple) {
            for (const modelItem of this.navData) {
                if (item !== modelItem && modelItem.expanded) {
                    modelItem.expanded = false;
                }
            }
        }
        item.expanded = !item.expanded;
    }

    getActiveClass(data: INavbarData): string {
        return this.router.url.includes(data.routeLink) ? 'active' : '';
    }

    shrinkItems(item: INavbarData): void {
        if (!this.multiple) {
            for (const modelItem of this.navData) {
                if (item !== modelItem && modelItem.expanded) {
                    modelItem.expanded = false;
                }
            }
        }
    }

    onMouseEnterSidenav(): void {
        this.hoverActive = true; // Khi hover vào thanh sidenav, đặt biến hoverActive thành true
    }

    onMouseLeaveSidenav(): void {
        this.hoverActive = false; // Khi rời khỏi thanh sidenav, đặt biến hoverActive thành false
    }
}
