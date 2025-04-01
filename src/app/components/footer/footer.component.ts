import { Component } from '@angular/core';
import { HlmIconDirective } from '../../shared/ui/ui-icon-helm/src/lib/hlm-icon.directive';
import { NgIcon } from '@ng-icons/core';

@Component({
  selector: 'app-footer',
  imports: [HlmIconDirective, NgIcon],
  templateUrl: './footer.component.html',
})
export class FooterComponent {}
