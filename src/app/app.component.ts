import { AfterViewInit, Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit, AfterViewInit {
    constructor() {}

    public ngOnInit(): void {}

    public ngAfterViewInit(): void {}
}
