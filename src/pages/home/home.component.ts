import { Component } from '@angular/core';
import { HeroSectionComponent } from 'src/shared/words-ui/components/hero-section/hero-section.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  standalone: true , 
  imports: [HeroSectionComponent]
})
export class HomeComponent {

}
