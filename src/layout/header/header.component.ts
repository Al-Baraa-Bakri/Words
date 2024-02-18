import { Component } from '@angular/core';
import { NavbarComponent } from 'src/shared/words-ui/components/navbar/navbar.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  standalone: true, 
  imports: [NavbarComponent]
})
export class HeaderComponent {

}
