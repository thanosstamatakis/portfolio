import { Component, Input, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
    selector: 'project-description',
    templateUrl: './project-description.component.html',
    styleUrls: ['./project-description.component.scss'],
})
export class ProjectDescriptionComponent implements OnInit {
    constructor(public sanitizer: DomSanitizer) {}

    @Input() public logoSide = true;
    @Input() public logo: string;
    @Input() public name: string;
    @Input() public timeframe: string;
    @Input() public primaryColor: string;
    @Input() public secondaryColor: string;

    public styleString: string;

    ngOnInit(): void {
        this.styleString = `
        --primary: ${this.primaryColor};
        --secondary: ${this.secondaryColor};
      `;
    }
}
