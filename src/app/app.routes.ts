import { Routes } from '@angular/router';
import { Public } from './layouts/public/public';
import { Home } from './features/home/home';

export const routes: Routes = [
  {
    path: '',
    component: Public,
    children: [
      {
        path: '',
        component: Home,
      },
    ],
  },

  {
    path: '**',
    redirectTo: '',
  },
];