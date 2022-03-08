import { Directive, ElementRef , HostListener, Input, Renderer2 } from '@angular/core';


@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {
  @Input() appHighlight = '';
  @Input()
  defaultElevation = 2;

  @Input()
  raisedElevation = 8;
  
  constructor(private element: ElementRef,private renderer: Renderer2) { 
    this.setElevation(0);
  }

  @HostListener('mouseenter') onMouseEnter() {
    this.element.nativeElement.style.backgroundColor = '	#181818';
    this.setElevation(16);
  }
  
  @HostListener('mouseleave') onMouseLeave() {
    this.element.nativeElement.style.backgroundColor = '';
    this.setElevation(0);
  }
  
  private highlight(color: string) {
    this.element.nativeElement.style.backgroundColor = color;
    
  }

  setElevation(amount: number) {
    const elevationPrefix = 'mat-elevation-z';
    // remove all elevation classes
    const classesToRemove = Array.from((<HTMLElement>this.element.nativeElement).classList)
      .filter(c => c.startsWith(elevationPrefix));
    classesToRemove.forEach((c) => {
      this.renderer.removeClass(this.element.nativeElement, c);
    });

    // add the given elevation class
    const newClass = `${elevationPrefix}${amount}`;
    this.renderer.addClass(this.element.nativeElement, newClass);
    
  }
  

}
