import { Routes } from '@angular/router';
import { CategoriesComponent } from './components/categories/categories.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';

export const routes: Routes = [
  {
    path: '',
    component: SidenavComponent,
    children: [
      { path: '', redirectTo: 'categories', pathMatch: 'full' },
      {
        path: 'categories',
        component: CategoriesComponent,
        title: 'categories',
      },
    ],
  },
];
