import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-event-binding',
  template: `
    <button (click)="onClicked()">Click Me!</button>
  `,
  styles: []
})
export class EventBindingComponent {
  /** @Output is listenable from outside this Component */
  @Output() clicked = new EventEmitter<string>();
  onClicked(){
    this.clicked.emit('It worked');
    /** alert('It worked'); **/
  }
}
