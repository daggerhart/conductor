import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent }   from './app.component';
import { SplashViewComponent } from './views/splash.component';
import { CreateProjectViewComponent } from './views/create-project.component';
import { ProjectViewComponent } from './views/project.component';
import { PackageViewComponent } from './views/package.component';
import { PageNotFoundComponent } from './views/not-found.component';

const appRoutes: Routes = [
    { path: 'project/:slug/package/:slug', component: PackageViewComponent },
    { path: 'project/:slug', component: ProjectViewComponent },
    { path: 'create', component: CreateProjectViewComponent },
    { path: 'splash', component: SplashViewComponent },
    { path: '', redirectTo: '/splash', pathMatch: 'full' },
    { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports:      [
      BrowserModule,
      RouterModule.forRoot(appRoutes)
  ],
  declarations: [
      AppComponent,
      SplashViewComponent,
      CreateProjectViewComponent,
      ProjectViewComponent,
      PackageViewComponent,
      PageNotFoundComponent
  ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
