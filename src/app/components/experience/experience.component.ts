import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
    selector: 'app-experience',
    templateUrl: './experience.component.html',
    styleUrls: ['./experience.component.scss'],
})
export class ExperienceComponent implements OnInit {
    public projects = {
        gymq: {
            numImages: 19,
            folder: 'gymq',
            images: [],
        },
        covidtracker: {
            numImages: 7,
            folder: 'covidtracker',
            images: [],
        },
        drasys: {
            numImages: 15,
            folder: 'drasys',
            images: [],
        },
        brightness: {
            numImages: 4,
            folder: 'brightness-control',
            images: [],
        },
    };
    constructor() {}

    ngOnInit(): void {
        for (const key in this.projects) {
            if (Object.prototype.hasOwnProperty.call(this.projects, key)) {
                let { numImages, folder } = this.projects[key];
                let urls = [];
                for (let i = 1; i <= numImages; i++) {
                    urls.push({ src: `${environment.cdnBaseUrl}/${folder}/${i}` });
                }
                this.projects[key].images = urls;
            }
        }
    }
}
