import { Directive, HostBinding, ElementRef, Renderer2, HostListener } from '@angular/core';


@Directive({
  selector: "[appMovaDirective]"
})

export class MinhaDiretiva {

  @HostBinding('style.backgroudColor') corFundo: string = "red";

  constructor(private elemento: ElementRef, private render: Renderer2) { }

  @HostListener("mouseenter") m1() {
    //this.render.setStyle(this.elemento.nativeElement, "backgroud-color", "red");
    this.corFundo = "yellow";
  }


  @HostListener("mouseleave") m2() {
    this.render.setStyle(this.elemento.nativeElement, "backgroud-color", "transparent");
    this.corFundo = "red";
  }



}
