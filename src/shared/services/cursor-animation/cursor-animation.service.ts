import { ComponentRef, Injectable, ViewContainerRef } from '@angular/core';
import { CursorAnimationComponent } from '../../words-ui/components/cursor-animation/cursor-animation.component';

@Injectable({
  providedIn: 'root'
})
export class CursorAnimationService {

  constructor() { }

  craeteCursorAnimation(viewContainerRef: ViewContainerRef , event: MouseEvent){ 
    console.log("viewContainerRef : " , viewContainerRef);
    const componentRef = 
    viewContainerRef?.createComponent(CursorAnimationComponent);
    const cursorIconPadding = {
      x: 18, 
      y: 20
    };  
    componentRef.setInput('pageX' , `${event.pageX - cursorIconPadding.x}px`);
    componentRef.setInput('pageY' , `${event.pageY - cursorIconPadding.y}px` );

    const animationTime = 1000;
    setTimeout(() => {
      this.removeCreatedCursorAnimationComponent(componentRef);
    } , animationTime); 
  }

  removeCreatedCursorAnimationComponent(componentRef: ComponentRef<CursorAnimationComponent>) {
    componentRef?.destroy();
  }
}
