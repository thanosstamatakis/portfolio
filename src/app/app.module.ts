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
import { AnimateOnScrollModule } from 'ng2-animate-on-scroll';
// Components
import { HeroComponent } from './components/hero/hero.component';
import { CiDashboardCardsComponent } from './components/ui/ci-dashboard-cards/ci-dashboard-cards.component';
import { ExperienceComponent } from './components/experience/experience.component';
import { SophiaSkillsComponent } from './components/ui/sophia-skills/sophia-skills.component';
import { ContactFormComponent } from './components/ui/contact-form/contact-form.component';
// NgZorro
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzSkeletonModule } from 'ng-zorro-antd/skeleton';
import { PersonalProjectsComponent } from './components/personal-projects/personal-projects.component';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzMessageModule } from 'ng-zorro-antd/message';

const ngZorroModules = [NzIconModule, NzSkeletonModule, NzFormModule, NzInputModule, NzButtonModule, NzMessageModule];

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
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule,
        BrowserAnimationsModule,
        AnimateOnScrollModule.forRoot(),
        ...ngZorroModules,
    ],
    providers: [{ provide: NZ_I18N, useValue: en_US }],
    bootstrap: [AppComponent],
})
export class AppModule {}
