import { Component, OnInit } from '@angular/core';
import {FormBuilder,FormGroup,FormControl,Validator, Validators} from '@angular/forms'
@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.page.html',
  styleUrls: ['./agregar.page.scss'],
})
export class AgregarPage implements OnInit {
public formulario : FormGroup;

  constructor(
 // aqui inyectamos las dependencias.
 private form : FormBuilder
  ) {
    this.formulario = this.form.group({
      /**
       * parametro 1: valor que tendra el campo texto, el famoso "Value"
       * parametro 2: aqui las validaciones sincronicas, como por ejemplo: requiered, maxlength, minlength
       * parametro 3: aqui van las validaciones asincronas hacia un servidor, ejemplo: disponibilidad de un nombre
       */
      nombre : new FormControl('',[Validators.required, Validators.minLength(3),Validators.maxLength(10)]),
      correo: new FormControl('',[Validators.required, Validators.email]),
      edad: new FormControl('',[Validators.required, Validators.minLength(3),Validators.maxLength(10)])

    })
   }
public obtenernombre():any{
  return this.formulario.get('nombre')
}
public obteneremail():any{
  return this.formulario.get('correo')
}
  ngOnInit() {
  }

}
