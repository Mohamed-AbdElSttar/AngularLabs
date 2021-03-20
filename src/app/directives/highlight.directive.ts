import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  constructor(private elm:ElementRef) { }
  @HostListener('mouseenter') OnMouseEnter() {
    this.elm.nativeElement.style.backgroundColor="orange"
  }
  @HostListener('mouseleave') OnMouseLeave() {
    this.elm.nativeElement.style.backgroundColor=null
  }
}
