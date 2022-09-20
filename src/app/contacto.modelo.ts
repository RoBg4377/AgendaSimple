export class Contacto {
  nombre: string = '';
  apellido: string = '';
  correo: string = '';
  telefono: number = 0;

  constructor (nom: string, ape: string, mail: string, tel: number)  {
    this.nombre = nom;
    this.apellido = ape;
    this.correo = mail;
    this.telefono = tel;
  }
}