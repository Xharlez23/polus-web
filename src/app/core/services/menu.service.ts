import { Injectable } from '@angular/core';
import { MenuItem } from '../models/menu-items';

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  readonly items: MenuItem[] = [

    {
      label:'Inicio',
      route:'/'
    },

    {
      label:'Servicios',
      route:'/servicios'
    },

    {
      label:'Proyectos',
      route:'/proyectos'
    },

    {
      label:'Nosotros',
      route:'/nosotros'
    },

    {
      label:'Blog',
      route:'/blog'
    },

    {
      label:'Contacto',
      route:'/contacto'
    }

  ];

}