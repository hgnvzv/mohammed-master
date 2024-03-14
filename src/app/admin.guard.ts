import { Injectable } from '@angular/core';
import { CanActivateChild, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivateChild {

  constructor(private router: Router) {}

  canActivateChild(): boolean {
    const isLoggedIn = true; 
    if (isLoggedIn) {
      return true; 
    } else {
      
      this.router.navigate(['login']);
      return false;
    }
  }
}
