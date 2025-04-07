import { Injectable } from '@angular/core';
import { toast } from 'ngx-sonner';

@Injectable({
  providedIn: 'root',
})
export class ToastService {
  showToast(message: string) {
    toast(message, {
      action: {
        label: 'Dismiss',
        onClick: () => console.log('Dismiss'),
      },
    });
  }
}
