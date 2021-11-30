import { AfterViewInit, Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';

@Component({
    selector: 'project-card',
    templateUrl: './project-card.component.html',
    styleUrls: ['./project-card.component.scss'],
})
export class ProjectCardComponent implements AfterViewInit {
    constructor() {}
    @ViewChild('card', { static: true }) card: ElementRef<HTMLDivElement>;
    @Input() primary = 'lavender';
    @Input() secondary = '';
    @Input() technologies: string[];
    @Input() bubblePrimary: string;
    @Input() bubbleSecondary: string;
    @Input() bubbleTertiary: string;

    public get background(): string {
        return this.secondary
            ? `
        linear-gradient(135deg, ${this.secondary}, ${this.primary})
        `
            : `
        ${this.primary}      
      `;
    }

    public ngAfterViewInit(): void {
        this.card.nativeElement.style.background = this.background;
    }
}
