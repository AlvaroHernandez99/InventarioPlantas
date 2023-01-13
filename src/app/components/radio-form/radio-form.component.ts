import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Plant} from "../../interfaces/plant";
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-radio-form',
  templateUrl: './radio-form.component.html',
  styleUrls: ['./radio-form.component.scss'],
})
export class RadioFormComponent implements OnInit {
  @Input() plantType: string = "";
  @Output() radioValue = new EventEmitter<string>();

  ngOnInit(): void {
    this.radioValue.emit("asdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdaws");
  }

  
  //plantType = new EventEmitter<any>();
  /*radioValue() {
    this.plantType.emit(this.plantType);
  }*/
  //hacer output para pasarle la variable al padre




}
