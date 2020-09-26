import { Component } from '@angular/core';

@Component({
  selector: 'ngx-footer',
  styleUrls: ['./footer.component.scss'],
  template: `
    <span class="created-by">Copyright © {{ now | date:'y'}}. Nimali Tea (PVT) Ltd</span>
  `,
})
export class FooterComponent {
  now: number;

  constructor() {
    this.now = Date.now();
  }
}
