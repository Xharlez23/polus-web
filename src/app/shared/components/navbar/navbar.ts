import { Component, HostListener } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

interface MenuItem {
  title: string;
  route: string;
  fragment?: string;
  exact?: boolean;
  icon: 'home' | 'services' | 'projects' | 'about' | 'contact';
}

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './navbar.html',
  styleUrl: './navbar.scss'
})
export class Navbar {

  isScrolled = false;

  menu: MenuItem[] = [
    { title: 'Inicio',    route: '/', exact: true,  icon: 'home'     },
    { title: 'Servicios', route: '/', fragment: 'servicios',   icon: 'services'  },
    { title: 'Proyectos', route: '/', fragment: 'portafolio',  icon: 'projects'  },
    { title: 'Nosotros',  route: '/', fragment: 'nosotros',    icon: 'about'     },
    { title: 'Contacto',  route: '/', fragment: 'contacto',    icon: 'contact'   },
  ];

  @HostListener('window:scroll')
  onScroll(): void {
    this.isScrolled = window.scrollY > 40;
  }

  scrollToContact(): void {
    document.getElementById('contacto')?.scrollIntoView({ behavior: 'smooth' });
  }
}