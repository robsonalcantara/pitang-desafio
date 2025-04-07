import { Component } from '@angular/core';
import {MenubarModule} from 'primeng/menubar';
import {MenuItem} from 'primeng/api';
import {ButtonModule} from 'primeng/button';
import {Router} from '@angular/router';
import {CommonModule, NgIf} from '@angular/common';
import { AvatarModule } from 'primeng/avatar';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [MenubarModule, ButtonModule, CommonModule, AvatarModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  itens: MenuItem[] = [];

  protected readonly sessionStorage = sessionStorage;

  constructor(private router: Router) {
  }

  ngOnInit() {
    this.updateItensMenu()
  }

  updateItensMenu(){
    this.itens = [
      { label: 'Usuários', routerLink: '/users', icon: 'pi pi-users', visible: true },
      { label: 'Carros', routerLink: '/cars', icon: 'pi pi-car', visible: true },
      { label: 'Perfil', routerLink: '/me', icon: 'pi pi-user', visible: true }
    ];
  }

  navigateToSignin(){
    this.router.navigate(['/signin']);
  }

  logout() {
    this.router.navigate(['/signin']);
    return sessionStorage.removeItem('auth-token');
  }

  get isAuthenticated(): boolean{
    return sessionStorage.getItem('auth-token') !== null;
  }
}
