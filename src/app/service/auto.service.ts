import { Injectable } from '@angular/core';
import { Auto } from '../interface/auto';

@Injectable({
  providedIn: 'root',
})
export class AutosService {
  constructor() {}

  autos: Auto[] = [
    {
      modelo: 'Audi A1',
      imagen: 'assets/audi-a1.jpg',
      descripcion:
        'El Audi A1 es un utilitario, un coche pequeño, un urbano de vocación premium, una alternativa al Volkswagen Polo, al Fiat 500, al DS3, al Alfa Romeo MiTo y sobre todo al MINI. No te pierdas nuestra guía de compra si estás pensando en adquirir un pequeño utilitario como el A1.El Audi A1 se fabrica en España, concretamente en la fábrica de SEAT en Martorell. ',
      tipo: 'Deportivo',
    },
    {
      modelo: 'Fiat 500',
      imagen: 'assets/fiat-500.jpg',
      descripcion:
        'El Fiat 500 es el pequeño vehículo urbano fabricado por Fiat. El Fiat 500 moderno rememora el auténtico 500, un clásico que pobló las calles de numerosos países entre los años 1957 y 1975. Cinquino en Italia o Fitito en Argentina, era un pequeño mini de tres puertas con estilo italiano con una potencia inicial de 15 CV',
      tipo: 'Clasico',
    },
    {
      modelo: 'Ford Fiesta',
      imagen: 'assets/ford-fiesta.jpg',
      descripcion:
        'El Ford Fiesta es un automóvil de turismo del segmento B desarrollado por la filial europea de la empresa estadounidense Ford Motor Company, y fabricado en Alemania, España, Brasil, México, China, India y Sudáfrica. Desde su aparición en 1976 ha habido seis generaciones distintas del Fiesta y se han vendido más de doce millones de unidades.',
      tipo: 'Fiestero',
    },
  ];

  getAutos(): Auto[] {
    return this.autos;
  }
}
