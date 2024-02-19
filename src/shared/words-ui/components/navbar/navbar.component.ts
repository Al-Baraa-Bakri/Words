import { Component } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  standalone: true
})
export class NavbarComponent {
  isNavbarOpen$: BehaviorSubject<boolean> = new BehaviorSubject(false);
  
  toggleMenu(): void {
    this.isNavbarOpen$.next(!this.isNavbarOpen$.getValue())
  }
}
