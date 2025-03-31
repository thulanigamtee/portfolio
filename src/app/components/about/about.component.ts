import { Component } from '@angular/core';
import { Info } from '../../shared/models/info.interface';
import { SectionInfoComponent } from '../../shared/section-info/section-info.component';
import { HlmIconDirective } from '../../shared/ui/ui-icon-helm/src/lib/hlm-icon.directive';
import { NgIcon } from '@ng-icons/core';

@Component({
  selector: 'app-about',
  imports: [SectionInfoComponent, HlmIconDirective, NgIcon],
  templateUrl: './about.component.html',
})
export class AboutComponent {
  info: Info = {
    subtitle: 'Introduction',
    title: 'About me',
    description:
      'I am an experienced Full Stack Software Developer with almost three years of expertise in the field. Throughout my career, I have had the opportunity to work on a variety of projects, which has allowed me to develop a wide range of skills. I am passionate about creating high-quality software and am always looking for ways to improve my skills.',
  };
}
