import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  private systemMediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
  private theme = new BehaviorSubject<'light' | 'dark'>(this.getSystemTheme());
  theme$ = this.theme.asObservable();

  constructor() {
    this.applyTheme(this.getSystemTheme());
    this.listenToSystemChanges();
  }

  private getSystemTheme(): 'light' | 'dark' {
    return this.systemMediaQuery.matches ? 'dark' : 'light';
  }

  private applyTheme(theme: 'light' | 'dark') {
    const root = document.documentElement;
    root.classList.remove('light', 'dark');
    root.classList.add(theme);
  }

  private listenToSystemChanges() {
    this.systemMediaQuery.addEventListener('change', (event) => {
      const newTheme = event.matches ? 'dark' : 'light';
      this.theme.next(newTheme);
      this.applyTheme(newTheme);
    });
  }
}
