import { AfterViewInit, Component, ElementRef, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { fade, logoAnimation } from './helpers/animations';

declare var Gradient: any;

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
