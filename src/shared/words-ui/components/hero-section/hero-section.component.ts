import { Component } from '@angular/core';
import { HeaderComponent } from 'src/layout/header/header.component';

@Component({
  selector: 'app-hero-section',
  templateUrl: './hero-section.component.html',
  standalone: true, 
  imports: [HeaderComponent]
})
export class HeroSectionComponent {

}
