import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Videojuegos } from '../../utils/videojuegos';
import * as videojuegosData from '../../../../public/json/videojuegosData.json';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  videojuegos: Videojuegos [] = (videojuegosData as any).default;

  constructor() { }

  ngOnInit(): void { 
    console.log(videojuegosData);
   }
}
