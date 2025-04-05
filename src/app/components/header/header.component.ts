import { Component, inject } from '@angular/core';
import { NavbarComponent } from './navbar/navbar.component';
import { HlmButtonDirective } from '@spartan-ng/ui-button-helm';
import { NgIcon } from '@ng-icons/core';
import { HlmIconDirective } from '@spartan-ng/ui-icon-helm';
import { LogoComponent } from '../../shared/logo/logo.component';
import { OverlayService } from './overlay.service';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-header',
  imports: [
    NavbarComponent,
    HlmButtonDirective,
    NgIcon,
    HlmIconDirective,
    LogoComponent,
    HlmButtonDirective,
    NgClass,
  ],
  templateUrl: './header.component.html',
})
export class HeaderComponent {
  private overlayService = inject(OverlayService);

  isHeaderHidden = false;
  isScrolled = false;
  isMobileMenuActive = false;

  ngOnInit() {
    window.addEventListener('scroll', this.onScroll, true);
    window.addEventListener('resize', this.onResize);
  }

  toggleMobileMenu() {
    this.isMobileMenuActive ? this.hideMobileMenu() : this.showMobileMenu();
  }

  showMobileMenu() {
    this.isMobileMenuActive = true;
    this.overlayService.overlayState = true;
    document.body.classList.add('no-scroll');
  }

  hideMobileMenu() {
    this.isMobileMenuActive = false;
    this.overlayService.overlayState = false;
    document.body.classList.remove('no-scroll');
  }

  onResize = () => {
    const isDesktop = window.innerWidth >= 768;
    if (isDesktop && this.isMobileMenuActive) {
      this.hideMobileMenu();
    }
  };

  lastScrollTop = 0;
  onScroll = () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    if (scrollTop > this.lastScrollTop && scrollTop > 100) {
      this.isHeaderHidden = true;
    } else this.isHeaderHidden = false;

    this.isScrolled = scrollTop > 0;
    this.lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
  };
}
