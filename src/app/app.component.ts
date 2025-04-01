import { Component, inject } from '@angular/core';
import { HeaderComponent } from './components/header/header.component';
import { OverlayService } from './components/header/overlay.service';
import { AsyncPipe, NgClass } from '@angular/common';
import { ThemeService } from './services/theme.service';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { ContactComponent } from './components/contact/contact.component';
import { LogoComponent } from './shared/logo/logo.component';
import { HlmIconDirective } from './shared/ui/ui-icon-helm/src/lib/hlm-icon.directive';
import { NgIcon } from '@ng-icons/core';
import { FooterComponent } from './components/footer/footer.component';
@Component({
  selector: 'app-root',
  imports: [
    HeaderComponent,
    NgClass,
    AsyncPipe,
    HomeComponent,
    AboutComponent,
    PortfolioComponent,
    ContactComponent,
    LogoComponent,
    HlmIconDirective,
    NgIcon,
    FooterComponent,
  ],
  templateUrl: './app.component.html',
})
export class AppComponent {
  themeService = inject(ThemeService);

  overlayService = inject(OverlayService);
  overlay$ = this.overlayService.overlay$;
}
