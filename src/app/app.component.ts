import { Component } from '@angular/core';
import { RecetarioService } from './recetario.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'recipes';

  receta_actual = '';
  paso_actual = '';

  constructor(private recetario: RecetarioService){
  }

  recetas;

  async ngOnInit(){
    this.recetas = await this.recetario.getRecetas();
    this.recetas = await this.recetario.getRecetas();
    this.recetas = await this.recetario.getRecetas();
  }

  onSelectedStep(event){
    this.paso_actual = event.paso;
    this.receta_actual = event.nombre;
    console.log(event);
  }
}
