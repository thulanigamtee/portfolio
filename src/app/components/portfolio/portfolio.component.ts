import { Component, inject } from '@angular/core';
import { PortfolioService } from './portfolio.service';
import { Info } from '../../shared/models/info.interface';
import { project } from './project.model';
import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout';
import { SectionInfoComponent } from '../../shared/section-info/section-info.component';
import { NgStyle } from '@angular/common';
import { HlmIconDirective } from '@spartan-ng/ui-icon-helm';
import { NgIcon } from '@ng-icons/core';

@Component({
  selector: 'app-portfolio',
  imports: [SectionInfoComponent, NgStyle, HlmIconDirective, NgIcon],
  templateUrl: './portfolio.component.html',
})
export class PortfolioComponent {
  breakpointObserver = inject(BreakpointObserver);
  portfolioService = inject(PortfolioService);
  projects: project[] = [];

  info: Info = {
    subtitle: 'My portfolio',
    title: 'My latest work',
    description:
      'Welcome to my web development portfolio! Explore a collection of projects showcasing my expertise in front-end development.',
  };

  isDesktopWidth!: boolean;

  ngOnInit() {
    this.breakpointObserver
      .observe(['(min-width: 768px)'])
      .subscribe((state: BreakpointState) => {
        this.isDesktopWidth = state.matches;
      });
    this.portfolioService
      .getProjects()
      .subscribe((data) => (this.projects = data));
  }
}
