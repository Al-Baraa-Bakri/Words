import { DOCUMENT } from '@angular/common';
import { Component, HostListener, Inject } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  constructor(
    @Inject(DOCUMENT) private document: Document
  ){

  }
  @HostListener('click', ['$event'])
  onClick(e: MouseEvent) {
    this.handleAddCursorAnimation(e);
  }
  title = 'words';

  handleAddCursorAnimation(e: MouseEvent): void {
    const el = this.document.createElement('span');
    const cursorIconPadding = {
      x: 18, 
      y: 20
    }; 
    el.classList.add(...["absolute", "h-12", "w-12", "rounded-full", "bg-words-primary", "animate-cursor-animation" , "pointer-events-none"])
    el.setAttribute('style' , `top:${e.y - cursorIconPadding.y}px; left:${e.x - cursorIconPadding.x}px`)
    this.document.getElementById('main')?.appendChild(el);
    const animationTime = 1000;
    setTimeout(() => {
      this.document.getElementById('main')?.removeChild(el);
    } , animationTime); 
  }
}
