import { DOCUMENT } from '@angular/common';
import { Component, ComponentRef, HostListener, Inject, ViewChild, ViewContainerRef } from '@angular/core';
import { CursorAnimationService } from 'src/shared/services/cursor-animation.service';
import { CursorAnimationComponent } from 'src/shared/words-ui/components/cursor-animation/cursor-animation.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})

export class AppComponent {
  @ViewChild('cursorAnimationContainer' , {read: ViewContainerRef}) viewContainerRef!: ViewContainerRef

  constructor(
    private cursorAnimation: CursorAnimationService,
    @Inject(DOCUMENT) private document: Document
  ){}

  @HostListener('click', ['$event'])
  onClick(e: MouseEvent) {
    this.cursorAnimation.craeteCursorAnimation(this.viewContainerRef , e);
  }
}
