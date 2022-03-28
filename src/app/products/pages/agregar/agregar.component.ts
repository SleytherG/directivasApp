import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styles: [
  ]
})
export class AgregarComponent implements OnInit {

  myForm: FormGroup = this._fb.group({
    nombre: ['', [ Validators.required ]]
  });

  texto1: string = 'Sleyther Calsin Pacsi';
  color: string = 'blue';


  constructor(
    private _fb: FormBuilder
  ) {
  }

  ngOnInit(): void {
  }

  tieneError( campo: string ): boolean {
    // return this.myForm.get( campo )?.invalid && this.myForm.get( campo )?.touched || false;
    return this.myForm.get( campo )?.invalid || false;
  }

  cambiarNombre() {
    this.texto1 = Math.random().toString();
  }
  cambiarColor() {
    const color = "#xxxxxx".replace(/x/g, y=>(Math.random()*16|0).toString(16));
    this.color = color;
  }

}
