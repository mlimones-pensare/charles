import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-receip',
  templateUrl: './receip.component.html',
  styleUrls: ['./receip.component.scss']
})
export class ReceipComponent implements OnInit {
  @Input() nombre;
  @Input() pasos;

  @Output() selectedStep: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  onClick(selectedPaso){
    this.selectedStep.emit({paso: selectedPaso, nombre: this.nombre})
  }

}
