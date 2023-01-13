import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-all-button',
  templateUrl: './all-button.component.html',
  styleUrls: ['./all-button.component.scss']
})
export class AllButtonComponent {
  @Input() color:string='';
  @Input() texto:string='';
}
