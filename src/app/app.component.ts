import { AfterViewInit, Component, ElementRef, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { NzMessageService } from 'ng-zorro-antd/message';
import { fade, logoAnimation } from './helpers/animations';

declare var Gradient: any;

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit, AfterViewInit {
    constructor(private message: NzMessageService) {}

    public ngOnInit(): void {
        this.message.info('Site is still under construction. Please excuse any bugs you might find.', { nzDuration: 10000 });
    }

    public ngAfterViewInit(): void {}
}
