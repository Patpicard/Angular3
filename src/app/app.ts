import { Component, signal, ViewChild } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DiscoFormComponent } from './disco-form/disco-form'; 
import { ReactiveFormsModule } from '@angular/forms'; // Importación necesaria para formularios
import { DescuentoPipe } from './pipes/descuento-pipe';
import { Disqueria } from './servicios/disqueria';
import { Disco } from './modelos/disco'
import { CommonModule } from '@angular/common'; @Component({
  selector: 'app-root',
  standalone: true, 
  imports: [CommonModule,RouterOutlet, 
    ReactiveFormsModule,DiscoFormComponent  ,DescuentoPipe 
    ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})


 
export class App {
   @ViewChild(DiscoFormComponent) componenteForm!: DiscoFormComponent;
   public productos: Disco [] =[] ;
   public borrados : Disco [] =[];
  constructor (private disqueria: Disqueria){}
 ngOnInit() {
    
    this.productos = this.disqueria.getProductos();
    this.borrados = this.disqueria.getBorrados();
  }
 

  
  protected readonly title = signal('High Fidelity 2000');
  copiarAlForm(item: any) {
    this.disqueria.quitarDeBorrados(item.id);
    // Transformamos la fecha para que el validador del formulario la acepte
    const dia = item.fecha.getDate().toString().padStart(2, '0');
    const mes = (item.fecha.getMonth() + 1).toString().padStart(2, '0');
    const anio = item.fecha.getFullYear();
    const fechaFormateada = `${dia}/${mes}/${anio}`;
 
    this.componenteForm.cargarDatosEnForm({
      disco: item.title,
      lanzamiento: fechaFormateada,
      precio: item.precio,
      descuento: item.descuento
    });

  this.borrados = this.disqueria.getBorrados();
}
eliminar(id: number) {
  
  this.disqueria.deleteProducto(id);
  
  this.productos = this.disqueria.getProductos();
  this.borrados = this.disqueria.getBorrados();
}
}
