import { Component } from '@angular/core';
import { Usuario } from 'src/app/models/usuario';
// importamos servicio de autenticacion
import { AuthService } from '../services/auth.service';
// importamos componente de rutas de angular
import { Router } from '@angular/router';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent {
  hide = true;

  // ------------------------ Interfaces de "Usuario" --------------------

  // IMPORTAR LA INTERFAZ DE USUARIO -> INICIALIZAR.
  usuarios: Usuario = {
    uid: '', // inicializamos con comillas simples porque es string
    nombre: '',
    apellido: '',
    email: '',
    rol: '',
    password: '',
  }
  // CREAMOS COLECCION DE USUARIOS, TIPO USUARIO PARA ARRAYS.
  ColeccionUsuarios: Usuario[] = [];
    // ------------------------ Fin Interfaces de "Usuario" --------------------


    constructor (
      public servicioAuth: AuthService,
      public servicioRutas: Router
    ){}
  // FUNCION PARA EL REGISTRO DE NUEVOS USUARIOS
  async registrar () {

    // CONSTANTE CREDENCIALES VA A RESGUARDAR LA INFORMACION QUE INGRESE EL USUARIO

    /*
    EJEMPLO
    const credenciales = {
      uid: this.usuarios.uid,
      nombre: this.usuarios.nombre,
      apellido: this.usuarios.apellido,
      email: this.usuarios.email,
      rol: this.usuarios.rol,
      password: this.usuarios.password
    }*/

      // REGISTRO CON SERVICIO
      const credenciales = {
        email: this.usuarios.email,
        password: this.usuarios.password
      }

      const res = await this.servicioAuth.Registrar(credenciales.email, credenciales.password)
      // el metodo THEN es una promesa que devuelve el mismo valor si todo sale bien
      .then(res => {
        alert("¡Se pudo registrar con exito :)!")

        this.servicioRutas.navigate(['/inicio']);
      })
      // el metodo catch captura una falla y la vuelve un error cuando la promesa salga mal
      .catch(error =>{
        alert("hubo un error  al registrar el nuevo usuario :(  \n"+error);
      })


    // enviamos nueva informacion como un nuevo objeto.
    this.ColeccionUsuarios.push(credenciales)

    // mostramos credenciales  en consola.
    console.log(credenciales);
  }

}
