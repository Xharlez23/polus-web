import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { Navbar } from '../../shared/components/navbar/navbar';
import { Footer } from '../../shared/components/footer/footer';

@Component({
  selector: 'app-public',
  standalone: true,
  imports: [
    Navbar,
    Footer,
    RouterOutlet
  ],
  templateUrl: './public.html',
  styleUrl: './public.scss',
})
export class Public {}