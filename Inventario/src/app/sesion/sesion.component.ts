import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthServicesService } from '../servicio/apiauths.service';

@Component({
  selector: 'app-sesion',
  templateUrl: './sesion.component.html',
  styleUrls: ['./sesion.component.scss']
})
export class SesionComponent implements OnInit {

  public usuario !: string;
  public password !: string;

  constructor(public apiauths: AuthServicesService,
    private router: Router) { }

  ngOnInit(): void {
  }

  login(){
    this.apiauths.login(this.usuario, this.password).subscribe(response =>{
      if(response.exito === 1){
        this.router.navigate(['/']);
      }
    });
  }

  

}
