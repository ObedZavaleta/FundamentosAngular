
//Modelo del tipo de objeto Persona, creado en una clase
export class Persona{
    nombre: string = "";
    apellido: string = "";

    constructor (nombre: string, apellido: string){
        this.nombre = nombre;
        this.apellido = apellido;      
    }
}