import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProjectsComponent } from './projects/projects.component';
import { ContactinfoComponent } from './contactinfo/contactinfo.component';

export const routes: Routes = [
    { path: "contact", component: ContactinfoComponent},
    { path: "projects", component: ProjectsComponent},
    { path: "**", component: HomeComponent, pathMatch: 'full' }
];
