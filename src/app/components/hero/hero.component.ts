import { AfterViewInit, Component, ElementRef, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { fade, logoAnimation } from '../../helpers/animations';

declare var Gradient: any;

@Component({
    selector: 'app-hero',
    templateUrl: './hero.component.html',
    styleUrls: ['./hero.component.scss'],
    animations: [fade, logoAnimation],
    encapsulation: ViewEncapsulation.None,
})
export class HeroComponent implements OnInit, AfterViewInit {
    @ViewChild('gradient', { static: true }) gradient: ElementRef<HTMLCanvasElement>;

    constructor() {}

    public ngOnInit(): void {}

    public ngAfterViewInit(): void {
        this.setGradient();
    }

    public setGradient(): void {
        const gradient = new Gradient();
        gradient.initGradient(`#${this.gradient.nativeElement.id}`);
    }
}
