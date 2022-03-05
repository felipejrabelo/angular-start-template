import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable } from "rxjs";
import { AuthResponseData } from "../interfaces/auth-response-date.interface";
import { GlobalService } from "../services/global.service";

@Injectable({providedIn: 'root'})
export class TestGuard implements CanActivate {

    constructor(private global: GlobalService, private router: Router){

    }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
        
        let finalUser:AuthResponseData = this.global.loadUserFromLocalStorage()!;
        if(finalUser){
            return true;
        }        
        return this.router.createUrlTree(['/main']);
    }
    
}