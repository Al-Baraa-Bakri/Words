import { NgStyle } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-cursor-animation',
  standalone: true,
  imports: [NgStyle],
  templateUrl: './cursor-animation.component.html',
})
export class CursorAnimationComponent {
  @Input() pageX!: string
  @Input() pageY!: string
}
