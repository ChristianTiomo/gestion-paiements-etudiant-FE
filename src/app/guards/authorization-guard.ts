import {
  ActivatedRouteSnapshot,
  CanActivate,
  CanActivateFn,
  GuardResult,
  MaybeAsync, Router,
  RouterStateSnapshot
} from '@angular/router';
import {Injectable} from '@angular/core';
import {AuthService} from '../services/auth-service';

@Injectable({providedIn:'root'})
export class AuthorizationGuard implements CanActivate{

  constructor(private authService: AuthService,
              private router: Router) {
  }
  canActivate(route: ActivatedRouteSnapshot,
              state: RouterStateSnapshot): MaybeAsync<GuardResult> {
    if(this.authService.isAuthenticated){
      let requiredRoles = route.data['role'];
      let userRoles = this.authService.role;
      for(let role of userRoles){
        if(requiredRoles.includes(role)){
          return true;
        }
      }
      return false;
    } else {
      this.router.navigateByUrl("/login");
      return false;
    }
  }

}
