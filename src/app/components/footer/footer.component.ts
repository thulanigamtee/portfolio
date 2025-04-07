import { Component } from '@angular/core';
import { HlmIconDirective } from '../../shared/ui/ui-icon-helm/src/lib/hlm-icon.directive';
import { NgIcon } from '@ng-icons/core';
import { HlmButtonDirective } from '@spartan-ng/ui-button-helm';
import { HlmTooltipTriggerDirective } from '@spartan-ng/ui-tooltip-helm';

interface Socials {
  name: string;
  link: string;
  icon: string;
}
@Component({
  selector: 'app-footer',
  imports: [
    HlmIconDirective,
    NgIcon,
    HlmButtonDirective,
    HlmTooltipTriggerDirective,
  ],
  templateUrl: './footer.component.html',
})
export class FooterComponent {
  socials: Socials[] = [
    {
      name: 'Linkedin',
      link: 'https://za.linkedin.com/in/thulani-gamteni-8845ab207',
      icon: 'lucideLinkedin',
    },
    {
      name: 'Github',
      link: 'https://github.com/thulanigamtee',
      icon: 'lucideGithub',
    },
  ];
}
