import { Component, inject } from '@angular/core';
import { HeaderComponent } from './components/header/header.component';
import { OverlayService } from './components/header/overlay.service';
import { AsyncPipe, NgClass } from '@angular/common';
import { ThemeService } from './services/theme.service';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
@Component({
  selector: 'app-root',
  imports: [
    HeaderComponent,
    NgClass,
    AsyncPipe,
    HomeComponent,
    AboutComponent,
    PortfolioComponent,
  ],
  templateUrl: './app.component.html',
})
export class AppComponent {
  themeService = inject(ThemeService);

  overlayService = inject(OverlayService);
  overlay$ = this.overlayService.overlay$;
}
