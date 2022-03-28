import {Directive, ElementRef, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';

@Directive({
  selector: '[appErrorMsg]'
})
export class ErrorMsgDirective implements OnInit, OnChanges{

  private _color: string = 'red';
  private _mensaje: string = 'Este campo es requerido';
  private _valido: boolean = false;

  htmlElement: ElementRef<HTMLElement>;
  // @Input() color: string = 'red';
  @Input() set color( color: string) {
    // const color = changes['color'].currentValue;
      this._color = color;
      this.setColor();
      // this.htmlElement.nativeElement.style.color = color;
  }
  // @Input() mensaje: string 'Este campo es requerido';
  @Input() set mensaje( mensaje: string ) {
    this._mensaje = mensaje;
    this.setMensaje();
    // this.htmlElement.nativeElement.innerText = mensaje;
  }
  @Input() set valido( value: boolean) {
    this._valido = value;
     if( value ) {
       this.htmlElement.nativeElement.classList.add('hidden');
     } else {
       this.htmlElement.nativeElement.classList.remove('hidden');
     }
  }

  @Input() nameClass: string = '';

  constructor( private el: ElementRef<HTMLElement>) {
    this.htmlElement = el;
  }

  ngOnInit() {
    // console.log( this._color ); // undefined
    // console.log( this._mensaje ); // undefined

    this.setColor();
    this.setMensaje();
    this.setClass();
  }

  ngOnChanges( changes: SimpleChanges) {

    // if ( changes['mensaje'] ) {
    //   const mensaje = changes['mensaje'].currentValue;
    //   this.htmlElement.nativeElement.innerText = mensaje;
    // }
    //
    // if ( changes['color'] ) {
    //   const color = changes['color'].currentValue;
    //   this.htmlElement.nativeElement.style.color = color;
    // }
    //
    // console.log( changes );
  }

  setColor(): void {
    this.htmlElement.nativeElement.style.color = this._color;
  }

  setMensaje(): void {
    this.htmlElement.nativeElement.innerText = this._mensaje;
  }

  setClass(): void {
    this.htmlElement.nativeElement.className = this.nameClass;
  }


}
