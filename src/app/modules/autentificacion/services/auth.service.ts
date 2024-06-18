import { Injectable } from '@angular/core';
// servicio de autentificacion de FireBase
import { AngularFireAuth } from '@angular/Fire/compat/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  // referenciar Auth de FireBase en el servicio
  constructor( public auth: AngularFireAuth ) {}

  // FUNCION PARA REGISTRO
  Registrar(email: string, password: string){
    //retorna el valor que es creado con el metodo "CreateEmail"
    return this.auth.createUserWithEmailAndPassword(email,password);
  }
  // FUNCION PARA INICIO DE SESION
  IniciarSesion (email: string, password: string) {
    // validar la informacion del usuario y saber si existe en la coleccion
    return this.auth.signInWithEmailAndPassword(email, password);
  }
  // FUNCION PARA CERRAR SESION
  CerrarSesion (email: string, password: string) {
    //devuelve una promesa vacia quitando el token
    return this.auth.signOut();
  }
  // FUNCION PARA TOMAR EL UID
}
