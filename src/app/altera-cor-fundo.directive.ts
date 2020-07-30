import { Directive, ElementRef, Renderer2, HostListener } from '@angular/core';

@Directive({
  selector: '[appAlteraCorFundo]'
})
export class AlteraCorFundoDirective {

  constructor(
    private elementRef: ElementRef,
    private renderer: Renderer2
  ) { 

  }

  @HostListener ('click') alteraCorQuandoClica () {
    this.renderer.setStyle( 
      this.elementRef.nativeElement, 
      'backgroundColor',
      'gray'
      );
      this.renderer.setStyle( 
       this.elementRef.nativeElement, 
       'box-shadow',
       '10px 10px'
      );
  }

}
