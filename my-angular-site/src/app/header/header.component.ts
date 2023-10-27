import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  template: `
    <!-- header -->
    <div class="navbar is-dark">
      <!-- logo -->
      <div class="navbar-brand">
        <a class='navbar-item'>
          <img src="../../assets/img/parachute.webp">
        </a>

      </div>
    </div>
  `,
  styles: [
  ]
})
export class HeaderComponent {

}
