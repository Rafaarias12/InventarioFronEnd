import { Injectable } from "@angular/core";
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable } from "rxjs";
import { AuthServicesService } from "../servicio/apiauths.service";

@Injectable({providedIn: 'root'})
export class AuthGuards implements CanActivate{

    constructor(private router: Router,
        private authService: AuthServicesService ){
        
    }

    canActivate(route: ActivatedRouteSnapshot){
        const usuario = this.authService.usuarioData;

        if(usuario){
            //this.router.navigate(['/home'])
            return true;
        }
        this.router.navigate(['/sesion']);
        return false;
    }
        
}