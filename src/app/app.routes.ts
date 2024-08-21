import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { NosotrosComponent } from './pages/nosotros/nosotros.component';
import { VideojuegosComponent } from './pages/videojuegos/videojuegos.component';

export const routes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'videojuegos', component: VideojuegosComponent },
    { path: 'nosotros', component: NosotrosComponent },
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: '**', component: VideojuegosComponent }
];
