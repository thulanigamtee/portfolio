import { Component, inject } from '@angular/core';
import { HeaderComponent } from './components/header/header.component';
import { OverlayService } from './components/header/overlay.service';
import { AsyncPipe, NgClass } from '@angular/common';
@Component({
  selector: 'app-root',
  imports: [HeaderComponent, NgClass, AsyncPipe],
  templateUrl: './app.component.html',
})
export class AppComponent {
  overlayService = inject(OverlayService);
  overlay$ = this.overlayService.overlay$;
}
