import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./home/home').then((module) => module.Home),
  },
  {
    path: 'list',
    loadComponent: () =>
      import('./conferance-list/conferance-list').then((module) => module.ConferanceList),
  },
  {
    path: 'details/:id',
    loadComponent: () =>
      import('./conferance-details/conferance-details').then(
        (module) => module.ConferanceDetails,
      ),
  },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {
    path: '**',
    loadComponent: () => import('./notfound/notfound').then((module) => module.Notfound),
  },
];
