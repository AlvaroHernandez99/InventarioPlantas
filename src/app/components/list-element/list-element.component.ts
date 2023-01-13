import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Plant } from '../../interfaces/plant';

@Component({
  selector: 'app-list-element',
  templateUrl: './list-element.component.html',
  styleUrls: ['./list-element.component.scss']
})
export class ListElementComponent {
  @Input() plant: Plant;
  @Output() deleteEvent: EventEmitter<void> = new EventEmitter();
  @Output() conditionEvent: EventEmitter<boolean> = new EventEmitter();


  public deletePlant(): void {
    this.deleteEvent.emit();
  }

  public conditionChange(): void {
    this.conditionEvent.emit(!this.plant.favorite);
  }


}
