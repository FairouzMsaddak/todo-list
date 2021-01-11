import { Directive, HostListener, ElementRef, Input } from '@angular/core';
import { Todo } from '../models/todo.model';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {
  @Input() even: boolean;
  @Input() todo: Todo;

  constructor(private el: ElementRef) {}

  @HostListener('mouseenter')
  onMouseEnter() {
    if (this.even) {
      this.hightlight('red');
    }
  }
  @HostListener('mouseleave')
  onMouseLeave() {
    this.hightlight();
  }

  hightlight(color: string = 'initial') {
    this.el.nativeElement.getElementsByTagName(
      'li'
    )[0].style.backgroundColor = color;
  }
}
