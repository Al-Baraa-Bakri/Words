import { DOCUMENT } from '@angular/common';
import { Component, ComponentRef, HostListener, Inject, ViewChild, ViewContainerRef } from '@angular/core';
import { CursorAnimationService } from 'src/shared/services/cursor-animation/cursor-animation.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})

export class AppComponent {
  @ViewChild('cursorAnimationContainer' , {read: ViewContainerRef}) viewContainerRef!: ViewContainerRef

  constructor(
    private cursorAnimationService: CursorAnimationService,
    @Inject(DOCUMENT) private document: Document
  ){}

  @HostListener('click', ['$event'])
  onClick(e: MouseEvent) {
    this.cursorAnimationService.createCursorAnimation(this.viewContainerRef , e);
  }

  createCursorAnimantion() {
    console.log("Done!");
  }
}
