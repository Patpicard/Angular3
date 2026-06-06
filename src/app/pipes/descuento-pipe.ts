import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'descuento',
  standalone: true // Importante para tu arquitectura actual
})
export class DescuentoPipe implements PipeTransform {
  // Recibe el valor (precio) y el porcentaje como parámetro
  transform(valor: number, porcentaje: number = 0): number {
    return valor - (valor * porcentaje / 100);
  }
}