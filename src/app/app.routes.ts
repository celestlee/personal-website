import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { WorkComponent } from './work/work.component';
import { SkillsComponent } from './skills/skills.component';

export const routes: Routes = [
  { path: '', component: HomeComponent }, // Home route
  { path: 'about', component: AboutComponent }, // About route
  { path: 'work', component: WorkComponent }, // Work route
  { path: 'skills', component: SkillsComponent }, // Skills route
];