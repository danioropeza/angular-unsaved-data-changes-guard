import { Routes } from '@angular/router';
import { AboutComponent, HomeComponent, ProjectComponent } from './components';
import { hasUnsavedChangesGuard } from './guards';

export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  {
    path: 'projects',
    component: ProjectComponent,
    canDeactivate: [hasUnsavedChangesGuard]
  },
  { path: 'about', component: AboutComponent },
];
