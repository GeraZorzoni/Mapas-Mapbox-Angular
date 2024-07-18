import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  //selector: 'app-alone-page', al ser una pagina no lo necesito
  standalone: true,
  imports: [CommonModule],
  templateUrl: './alone-page.component.html',
  styleUrl: './alone-page.component.css',
})
export class AlonePageComponent {}
