import { AfterViewInit, Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

declare let gtag: Function;

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit, AfterViewInit {
    constructor(private router: Router) {
        this.router.events.subscribe((ev) => {
            if (ev instanceof NavigationEnd) {
                gtag('config', 'G-PJFQ5763TB', {
                    page_path: ev.urlAfterRedirects,
                });
            }
        });
    }

    public ngOnInit(): void {}

    public ngAfterViewInit(): void {}
}
