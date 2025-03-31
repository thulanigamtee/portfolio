import { NgClass } from '@angular/common';
import { Component, Input } from '@angular/core';

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

  links: Link[] = [
    { name: 'home', path: 'home' },
    { name: 'about me', path: 'about' },
    { name: 'portfolio', path: 'portfolio' },
  ];
}
