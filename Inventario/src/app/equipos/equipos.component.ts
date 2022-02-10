import { Component, OnInit } from '@angular/core';
import { EquipoServiceService } from '../servicio/equipo-service.service';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-equipos',
  templateUrl: './equipos.component.html',
  styleUrls: ['./equipos.component.scss']
})
export class EquiposComponent implements OnInit {

  public lst: any[] = [];

  public columnas: string[] = ['Host', 'TipoEquipo', 'Usuario', 'Marca', 'Modelo'];
  
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
