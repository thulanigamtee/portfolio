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
import { HlmIconDirective } from '../../shared/ui/ui-icon-helm/src/lib/hlm-icon.directive';
import { NgIcon } from '@ng-icons/core';
import { HlmButtonDirective } from '@spartan-ng/ui-button-helm';
import { HlmSpinnerComponent } from '@spartan-ng/ui-spinner-helm';
import emailjs from '@emailjs/browser';
import { environment } from '../../../environments/environment.development';
import { ToastService } from '../../services/toast.service';

@Component({
  selector: 'app-contact',
  imports: [
    ReactiveFormsModule,
    SectionInfoComponent,
    HlmFormFieldComponent,
    HlmInputDirective,
    HlmIconDirective,
    NgIcon,
    HlmButtonDirective,
    HlmSpinnerComponent,
    HlmButtonDirective,
  ],
  templateUrl: './contact.component.html',
})
export class ContactComponent {
  formBuilder = inject(FormBuilder);
  toastService = inject(ToastService);

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

  isSendingMessage = false;

  sendEmail() {
    if (this.contactForm.invalid) {
      return;
    }

    this.isSendingMessage = true;
    emailjs
      .send(
        environment.emailJS.serviceId,
        environment.emailJS.templateId,
        this.contactForm.value,
        environment.emailJS.publicKey
      )
      .then(() => {
        this.contactForm.reset();
        this.isSendingMessage = false;
        this.toastService.showToast('Message successfully sent');
      })
      .catch(() => {
        this.isSendingMessage = false;
        this.toastService.showToast('Error sending message');
      });
  }
}
