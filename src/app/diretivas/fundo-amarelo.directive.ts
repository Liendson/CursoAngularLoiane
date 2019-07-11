import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appFundoAmarelo]'
})
export class FundoAmareloDirective {

  constructor(private elementRef: ElementRef) {
    console.log(this.elementRef);
    this.elementRef.nativeElement.style.backgroundColor = 'blue';
  }

}
