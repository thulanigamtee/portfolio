import { Component, Input } from '@angular/core';
import { Info } from '../models/info.interface';

@Component({
  selector: 'app-section-info',
  imports: [],
  templateUrl: './section-info.component.html',
})
export class SectionInfoComponent {
  @Input() info: Info = {
    subtitle: '',
    title: '',
    description: '',
  };
}
