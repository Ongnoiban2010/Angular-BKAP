import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Hero } from '../_models/hero';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {

  constructor() { }

  createDb() {
    const heroes = [
      {id: 11, name: 'Doan'},
      {id: 12, name: 'Nhi'},
      {id: 13, name: 'Nguyen'},
      {id: 14, name: 'Han'},
      {id: 15, name: 'An'},
      {id: 16, name: 'Quyet'},
      {id: 17, name: 'Tuan'},
      {id: 18, name: 'Doan'},
      {id: 19, name: 'Doan'},
      {id: 20, name: 'Doan'},
    ];
    return {heroes};
  }

  // Overries the genId method to ensure that a hero always has an id
  // If the hores array is empty
  // the mothod below returns the initial number (11).
  // if the heroes array is not empty, the method below returns the highest
  // hero id + 1
  genId(heroes: Hero[]): number {
    return heroes.length > 0 ? Math.max(...heroes.map(hero => hero.id)) + 1 : 11;
  }
}
