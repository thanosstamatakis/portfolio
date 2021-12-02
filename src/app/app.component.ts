import { AfterViewInit, Component, OnInit } from '@angular/core';
import { NzMessageService } from 'ng-zorro-antd/message';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit, AfterViewInit {
    constructor(private message: NzMessageService) {}

    public ngOnInit(): void {}

    public ngAfterViewInit(): void {}
}
