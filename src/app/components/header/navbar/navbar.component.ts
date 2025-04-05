import { NgClass } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
interface Link {
  name: string;
  path: string;
}

@Component({
  selector: 'app-navbar',
  imports: [NgClass],
  templateUrl: './navbar.component.html',
})
export class NavbarComponent {
  @Input() isActive = false;
  @Output() mobileMenuEvent = new EventEmitter();

  hideMobileMenu() {
    this.mobileMenuEvent.emit();
  }

  activeSection = 'home';
  setActiveSection(section: string) {
    this.activeSection = section;
    this.hideMobileMenu();
  }

  links: Link[] = [
    { name: 'home', path: 'home' },
    { name: 'about me', path: 'about' },
    { name: 'portfolio', path: 'portfolio' },
  ];
}
