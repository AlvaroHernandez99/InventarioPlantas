import {Component, VERSION} from '@angular/core';
import { Plant } from './interfaces/plant';
import { PLANTS } from './interfaces/mocks-plants';
import { RadioFormComponent } from "./components/radio-form/radio-form.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Inventario de plantas AHM';
  constructor() { }
  public newPlant: string;
  public plantType: string;

  /*public getTypeRadio: string;*/

  /*public newPlantRadio: string;*/

  public plants: Plant[] = PLANTS;

  public addList(): void {
    if (!this.newPlant) {
      return;
    }
    this.plants.push({
      name: this.newPlant, type: this.plantType, favorite: false
    })
    this.newPlant = "";
    this.plantType = "" ;
  }

  public deleteForm(): void {
    this.newPlant = "" ;
    this.plantType = "" ;
  }

  public deletePlant (plant: Plant): void {
    this.plants = this.plants.filter(arrayPlants => arrayPlants !== plant);
  }

  public conditionChange (favorite: boolean, plant: Plant): void {
    const arrayPlants = this.plants.find(arrayPlants => arrayPlants === plant).favorite = favorite;
  }

  public orderAlphabetically () {

  }


}
