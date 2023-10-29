import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  template: `
    <!-- header -->
    <div class="navbar is-dark">
      <!-- logo -->
      <div class="navbar-brand">
        <a class='navbar-item'>
          <img src="../../assets/img/parachute.webp" routerLink="/">
        </a>

      </div>
      <!-- menu -->
      <div class="navbar-menu">
        <div class="navbar-end">
          <a class="navbar-item" routerLink="/">Home</a>
          <a class="navbar-item" routerLink="/contact">Contact</a>
          <a class="navbar-item" routerLink="/users">Users</a>
        </div>

      </div>
    </div>
  `,
  styles: [
  ]
})
export class HeaderComponent {

}
