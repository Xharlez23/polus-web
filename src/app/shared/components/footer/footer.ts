import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-footer',
  standalone: true,              // ← faltaba esto
  imports: [RouterLink],         // ← necesario para routerLink en el template
  templateUrl: './footer.html',
  styleUrl: './footer.scss'
})
export class Footer {
  currentYear = new Date().getFullYear(); // año dinámico, nunca expira
}