import { Injectable } from '@angular/core';
import { Disco } from '../modelos/disco'
@Injectable({
  providedIn: 'root',
})
export class Disqueria {

 public productos: Disco[] = [ {
    id: 0,
    title: 'Angine de Poitrine, Angine de Poitrine Vol I',
    fecha: new Date(2024, 5, 14),
    precio: 15,
    descuento: 10
  },
  {
    id: 1,
    title: 'Angine de Poitrine, Angine de Poitrine Vol II',
    fecha: new Date(2026, 3, 3),
    precio: 15,
    descuento: 11
  },
  {
    id: 2,
    title: 'Bestia Bebé, Gracias por nada',
    fecha: new Date(2026, 0, 1),
    precio: 15,
    descuento: 12
  },

  {
    id: 4,
    title: 'Charly García, Piano Bar',
    fecha: new Date(1984, 11, 1),
    precio: 15,
    descuento: 14
  },
  {
    id: 5,
    title: 'El mató a un policía motorizado, Navidad de Reserva',
    fecha: new Date(2005, 5, 1),
    precio: 15,
    descuento: 15
  },
  {
    id: 6,
    title: 'Incubus, Light Grenades',
    fecha: new Date(2006, 10, 28),
    precio: 15,
    descuento: 16
  },
  {
    id: 7,
    title: 'Mostruo!, Profunda desorganización',
    fecha: new Date(2014, 9, 4),
    precio: 15,
    descuento: 17
  },
  {
    id: 8,
    title: 'Porcupine Tree, In Absentia',
    fecha: new Date(2002, 8, 24),
    precio: 15,
    descuento: 18
  },
  {
    id: 9,
    title: 'Porcupine Tree, Deadwing',
    fecha: new Date(2005, 2, 28),
    precio: 15,
    descuento: 19
  },
  {
    id: 10,
    title: 'Pulp!, More',
    fecha: new Date(2025, 4, 5),
    precio: 15,
    descuento: 20
  },
  {
    id: 12,
    title: 'Spinetta Jade, Alma de Diamante',
    fecha: new Date(1980, 9, 2),
    precio: 15,
    descuento: 22
  },
  {
    id: 13,
    title: 'Wilco, Star Wars',
    fecha: new Date(2015, 6, 16),
    precio: 15,
    descuento: 23
  },
  {
    id: 14,
    title: 'Wilco, Wilco (the album)',
    fecha: new Date(2009, 5, 30),
    precio: 15,
    descuento: 24
  },
  {
    id: 15,
    title: 'Yo Rey y los Redonditos de Ricota, Oktubre',
    fecha: new Date(1986, 9, 4),
    precio: 15,
    descuento: 25
  }
];

public borrados: Disco[]= [];
constructor (){
   const ultimo = this.productos.pop();
    if (ultimo) {
      this.borrados.push(ultimo);
}
}
  getProductos() : Disco[]{
    return this.productos;
  }

  // Método para obtener el historial de borrados
  getBorrados(): Disco[] {
    return this.borrados;
  }
    deleteProducto(id: number) {
    const index = this.productos.findIndex(p => p.id === id);
    if (index !== -1) {
      // Quitamos del array principal y movemos al historial
      const eliminado = this.productos.splice(index, 1);
      this.borrados.push(eliminado[0]);
    }
  }
 public addDisco(disco:Disco){

  const maxId = this.productos.length > 0 
    ? Math.max(...this.productos.map(p => p.id)) 
    : -1;

  // 2. Le asignamos el nuevo ID (máximo + 1) al objeto que recibimos
  disco.id = maxId + 1;

  // 3. Agregamos el nuevo disco al arreglo principal
  this.productos.push(disco);
 }
public quitarDeBorrados(id: number) {
  const index = this.borrados.findIndex(b => b.id === id);
  if (index !== -1) {
    this.borrados.splice(index, 1); 
  }
}
}
