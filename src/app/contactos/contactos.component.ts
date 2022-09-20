import { Component, OnInit } from '@angular/core';
import { Contacto } from '../contacto.modelo';

@Component({
  selector: 'app-contactos',
  templateUrl: './contactos.component.html',
  styleUrls: ['./contactos.component.css']
})
export class ContactosComponent implements OnInit {
  titulo:string = 'mis contactos'

  contactos: Contacto[] = [
    new Contacto('Juan', 'Perez', 'perez@hotmail.com', 38845436),
    new Contacto('Luis', 'Gomez', 'gomez@hotmail.com', 38845676),
    new Contacto('Ana', 'Ramirez', 'ramirez@hotmail.com', 38898236)
  ]

  selectedContacto?: Contacto;

  agregarContacto(): void {
    let nuevoContacto = new Contacto(this.campoNombre, this.campoApellido, this.campoCorreo, this.campoTelefono);
    this.contactos.push(nuevoContacto)
  }

  campoNombre: string = '';
  campoApellido: string = '';
  campoCorreo: string = '';
  campoTelefono: number = 0;

  
  onSelect(contacto: Contacto):void{
    this.selectedContacto = contacto
  }


  constructor() { }

  ngOnInit(): void {
  }

}
