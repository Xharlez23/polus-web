import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {

  private readonly storageKey = 'polus-theme';

  constructor(
    @Inject(PLATFORM_ID) private platformId: Object
  ) {}

  initTheme(): void {

    // Si está en el servidor, no hacer nada
    if (!isPlatformBrowser(this.platformId)) {
      return;
    }

    const saved = localStorage.getItem(this.storageKey);

    if (saved) {
      document.documentElement.setAttribute('data-theme', saved);
    } else {

      const prefersDark = window.matchMedia(
        '(prefers-color-scheme: dark)'
      ).matches;

      document.documentElement.setAttribute(
        'data-theme',
        prefersDark ? 'dark' : 'light'
      );

    }

  }

  toggleTheme(): void {

    if (!isPlatformBrowser(this.platformId)) {
      return;
    }

    const current = document.documentElement.getAttribute('data-theme');

    const next = current === 'dark' ? 'light' : 'dark';

    document.documentElement.setAttribute('data-theme', next);

    localStorage.setItem(this.storageKey, next);

  }

  isDark(): boolean {

    if (!isPlatformBrowser(this.platformId)) {
      return true;
    }

    return document.documentElement.getAttribute('data-theme') === 'dark';

  }

}