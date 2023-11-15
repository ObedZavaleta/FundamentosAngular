import { Component } from '@angular/core';
import { Persona } from './persona.models';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Listado de Personas';
  personas: Persona[] = [
    new Persona('juan', 'morales'),
    new Persona('Karen', 'Gutierrez'),
    new Persona('Ana', 'Yañez')
  ]; //arreglo con varios objetos de la clase Persona, si hay un espacio en blanco entre las comillas, no aparecera el valor del placehordr
  nombreInput: string = '';
  apellidoInput: string = '';

  agregarPersona(){
    let persona1 = new Persona(this.nombreInput, this.apellidoInput);
    this.personas.push( persona1 );
  }
}
