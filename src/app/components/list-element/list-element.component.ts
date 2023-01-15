import {Component, EventEmitter, Input, OnChanges, Output} from '@angular/core';
import { Plant } from '../../interfaces/plant';
import {PLANTS} from "../../interfaces/mocks-plants";

class RadioComponent {
}

@Component({
  selector: 'app-list-element',
  templateUrl: './list-element.component.html',
  styleUrls: ['./list-element.component.scss']
})
export class ListElementComponent {
  @Input() plant: Plant;
  @Output() deleteEvent: EventEmitter<void> = new EventEmitter();
  @Output() conditionEvent: EventEmitter<boolean> = new EventEmitter();

  public plants: Plant[] = PLANTS;
  public deletePlant(): void {
    this.deleteEvent.emit();
  }

  public conditionChange(): void {
    this.conditionEvent.emit(!this.plant.favorite);
  }



}
