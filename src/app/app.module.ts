import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { en_US } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// Components
import { HeroComponent } from './components/hero/hero.component';
import { CiDashboardCardsComponent } from './components/ui/ci-dashboard-cards/ci-dashboard-cards.component';
import { ExperienceComponent } from './components/experience/experience.component';
import { SophiaSkillsComponent } from './components/ui/sophia-skills/sophia-skills.component';
import { ContactFormComponent } from './components/ui/contact-form/contact-form.component';
import { ProjectCardComponent } from './components/ui/project-card/project-card.component';
import { ProjectGalleryComponent } from './components/ui/project-gallery/project-gallery.component';
import { ProjectDescriptionComponent } from './components/ui/project-description/project-description.component';
// Directives
import { IsInViewDirective } from './helpers/is-in-view/is-in-view.directive';
// NgZorro
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzSkeletonModule } from 'ng-zorro-antd/skeleton';
import { PersonalProjectsComponent } from './components/personal-projects/personal-projects.component';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzMessageModule } from 'ng-zorro-antd/message';
import { NzImageModule } from 'ng-zorro-antd/image';
import { GoogleAnalyticsService } from './services/google-analytics/google-analytics.service';

const ngZorroModules = [NzIconModule, NzSkeletonModule, NzFormModule, NzInputModule, NzButtonModule, NzMessageModule, NzImageModule];

registerLocaleData(en);

@NgModule({
    declarations: [
        AppComponent,
        HeroComponent,
        ExperienceComponent,
        CiDashboardCardsComponent,
        SophiaSkillsComponent,
        PersonalProjectsComponent,
        ContactFormComponent,
        IsInViewDirective,
        ProjectCardComponent,
        ProjectGalleryComponent,
        ProjectDescriptionComponent,
    ],
    imports: [BrowserModule, AppRoutingModule, FormsModule, ReactiveFormsModule, HttpClientModule, BrowserAnimationsModule, ...ngZorroModules],
    providers: [{ provide: NZ_I18N, useValue: en_US }, GoogleAnalyticsService],
    bootstrap: [AppComponent],
})
export class AppModule {}
