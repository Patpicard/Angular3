import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
//import { ProductosService } from '../servicios/productos.service'; // Inyección
import { CommonModule } from '@angular/common'; // 
import { ReactiveFormsModule } from '@angular/forms';
import { Disqueria } from '../servicios/disqueria';


import { Disco } from '../modelos/disco'


@Component({
  selector: 'app-disco-form',
   standalone: true,
  imports: [
    CommonModule, 
    ReactiveFormsModule
  ],
  templateUrl: './disco-form.html'
})
export class DiscoFormComponent implements OnInit {
  formulario!: FormGroup;

  
  constructor(private fb: FormBuilder, private disqueria: Disqueria 
    

    
    ) {}

  ngOnInit(): void {
    this.formulario = this.fb.group({
      disco: ['', Validators.required],
      // Validación con patrón para fecha DD/MM/AAAA  
     lanzamiento: ['', [Validators.required, Validators.pattern('^\\d{2}/\\d{2}/\\d{4}$')]],
      // Precio debe ser entero y mayor a 0  
      precio: ['', [Validators.required, Validators.min(1), Validators.pattern('^\\d+$')]],
      descuento: ['', [Validators.required, Validators.min(0)]]
    });
  }
 buildDisco(fechaObj:Date, datos: any):Disco {

  const nuevoDisco: Disco = {
      id: Math.floor(Math.random() * 1000), 
      title: datos.disco,
      fecha: fechaObj,
      precio: parseFloat(datos.precio),
      descuento: parseInt(datos.descuento)
    };
    return nuevoDisco;
 }
   
enviar() {
  if (this.formulario.valid) {
    const datos = this.formulario.value;
 
    const partes = datos.lanzamiento.split('/');
const dia = parseInt(partes);        // Posición 0: Día
    const mes = parseInt(partes[1]) - 1;    // Posición 1: Mes (0-11 en JS)
    const anio = parseInt(partes[2]);       // Posición 2: Año

    const fechaObj = new Date(anio, mes, dia);
    
 const nuevoDisco: Disco = this.buildDisco(fechaObj,datos);
    

   console.log('Objeto Disco a enviar:', nuevoDisco);
    this.disqueria.addDisco(nuevoDisco);

    this.formulario.reset();
    console.log('Producto agregado con éxito:', nuevoDisco);
  }
}




  cargarDatosEnForm(datos: any) {
  // patchValue actualiza los campos que coincidan con el nombre del control
  this.formulario.patchValue(datos);
  console.log('Datos cargados para edición:', datos.disco);
}
}