import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RecetarioService {

  recetas = [
    {
      'nombre': 'n1',
      'pasos': ['p1', 'p2', 'p3'],
    },
    {
      'nombre': 'n2',
      'pasos': ['p1', 'p2'],
    },
    {
      'nombre': 'n3',
      'pasos': ['p1', 'p2', 'p3', 'p4'],
    },
  ];


  constructor(private http: HttpClient) { }

  async getRecetas() {
    return this.http.get('https://5c4faac8ee97f60014047fd7.mockapi.io/recetas').toPromise();
  }
}
