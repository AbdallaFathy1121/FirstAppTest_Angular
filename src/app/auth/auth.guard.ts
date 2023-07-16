import { inject } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivateFn, Router, RouterStateSnapshot } from "@angular/router";
import { AuthService } from "./auth.service";
import { Observable } from "rxjs";

export const AuthGuard: CanActivateFn = (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) 
    : boolean | Promise<boolean> | Observable<boolean> => {

    const authService = inject(AuthService);
    const router = inject(Router);

    console.log(route);
    console.log(state);

    return authService.isAuthenticated()
        .then(
            (auth) => {
                if(auth) {
                    return true;
                } else {
                    return router.navigate(['/']);
                }
            }
        );
    
};
