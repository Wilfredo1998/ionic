import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-regresar',
  templateUrl: './regresar.component.html',
  styleUrls: ['./regresar.component.scss'],
})
export class RegresarComponent implements OnInit {
  
  //Le decimos a angular que vamos a recibir un input, esto es para que el título del header sea dinámico
  @Input() Titulo; 
  
  constructor() { }

  ngOnInit() {}

}
