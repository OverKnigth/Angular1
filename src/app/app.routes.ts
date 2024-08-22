import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { NosotrosComponent } from './pages/nosotros/nosotros.component';
import { VideojuegosComponent } from './pages/videojuegos/videojuegos.component';
import { VideojuegoComponent } from './pages/videojuego/videojuego.component';
import { Error404Component } from './pages/error404/error404.component';

export const routes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'videojuegos', component: VideojuegosComponent },
    { path: 'nosotros', component: NosotrosComponent },
    { path: 'videojuego/:id', component: VideojuegoComponent },
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: '**', component: Error404Component }
];
