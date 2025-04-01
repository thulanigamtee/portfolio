import { Component, inject } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Info } from '../../shared/models/info.interface';
import { SectionInfoComponent } from '../../shared/section-info/section-info.component';
import { HlmFormFieldComponent } from '@spartan-ng/ui-formfield-helm';
import { HlmInputDirective } from '@spartan-ng/ui-input-helm';
import { HlmErrorDirective } from '../../shared/ui/ui-formfield-helm/src/lib/hlm-error.directive';
import { HlmIconDirective } from '../../shared/ui/ui-icon-helm/src/lib/hlm-icon.directive';
import { NgIcon } from '@ng-icons/core';
import { HlmButtonDirective } from '@spartan-ng/ui-button-helm';

@Component({
  selector: 'app-contact',
  imports: [
    ReactiveFormsModule,
    SectionInfoComponent,
    HlmFormFieldComponent,
    HlmInputDirective,
    HlmErrorDirective,
    HlmIconDirective,
    NgIcon,
    HlmButtonDirective,
  ],
  templateUrl: './contact.component.html',
})
export class ContactComponent {
  formBuilder = inject(FormBuilder);
  contactForm!: FormGroup;

  info: Info = {
    subtitle: 'Connect with me',
    title: 'Get in touch',
    description:
      "I'd love to hear from you! If you have any questions, comments or feedback, please use the form below.",
  };

  ngOnInit() {
    this.contactForm = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', [Validators.email, Validators.required]],
      message: ['', Validators.required],
    });
  }
}
