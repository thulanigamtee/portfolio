import { Component } from '@angular/core';
import { NgIcon } from '@ng-icons/core';
import { HlmButtonDirective } from '@spartan-ng/ui-button-helm';
import { HlmIconDirective } from '@spartan-ng/ui-icon-helm';

@Component({
  selector: 'app-home',
  imports: [HlmButtonDirective, HlmIconDirective, NgIcon],
  templateUrl: './home.component.html',
})
export class HomeComponent {}
