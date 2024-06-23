import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <app-nav></app-nav>
<div class="router pb-3">
    <router-outlet></router-outlet>
</div>
<app-footer></app-footer>
`,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'frontEnd1';
}
