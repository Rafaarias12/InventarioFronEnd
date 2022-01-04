import { Component, OnInit } from '@angular/core';
import { EquipoServiceService } from '../servicio/equipo-service.service';

@Component({
  selector: 'app-equipos',
  templateUrl: './equipos.component.html',
  styleUrls: ['./equipos.component.scss']
})
export class EquiposComponent implements OnInit {

  public lst: any[] | undefined;
  constructor(private apiEquipo: EquipoServiceService) { 
    
  }


  ngOnInit(): void {
    this.getEquipo();
  }

  getEquipo(){
    this.apiEquipo.getEquipo().subscribe(response =>{
      this.lst = response.data;
    });
  }

}
