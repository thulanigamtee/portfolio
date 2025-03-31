import { Component, inject } from '@angular/core';
import { NavbarComponent } from './navbar/navbar.component';
import { HlmButtonDirective } from '@spartan-ng/ui-button-helm';
import { NgIcon } from '@ng-icons/core';
import { HlmIconDirective } from '@spartan-ng/ui-icon-helm';
import { LogoComponent } from '../../shared/logo/logo.component';
import { OverlayService } from './overlay.service';

@Component({
  selector: 'app-header',
  imports: [
    NavbarComponent,
    HlmButtonDirective,
    NgIcon,
    HlmIconDirective,
    LogoComponent,
    HlmButtonDirective,
  ],
  templateUrl: './header.component.html',
})
export class HeaderComponent {
  overlayService = inject(OverlayService);

  isMenuActive = false;

  toggleMenu() {
    this.isMenuActive = !this.isMenuActive;
    this.overlayService.overlayState = this.isMenuActive;
  }
}
