import { inject } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivateChildFn, CanActivateFn, Router, RouterStateSnapshot } from "@angular/router";
import { AuthService } from "./auth.service";
import { Observable } from "rxjs";

export const AuthGuard: CanActivateFn | CanActivateChildFn = (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) 
    : boolean | Promise<boolean> | Observable<boolean> => {

    const authService = inject(AuthService);
    const router = inject(Router);

    console.log(state);

    return authService.isAuthenticated()
        .then((isAuthenticated) => {
            if(isAuthenticated === true) {
                return true;
            } else {
                return router.navigate(['/']);
            }
        });
};