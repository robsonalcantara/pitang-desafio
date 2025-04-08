import { Component } from '@angular/core';
import {DatePipe} from '@angular/common';
import {UserFormComponent} from './user-form/user-form.component';
import {SharedModule} from '../../shared/shared.module';
import {User} from '../../models/user.model';
import {UserService} from './services/user.service';
import {MessageService} from 'primeng/api';
import {ToastModule} from 'primeng/toast';

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [SharedModule, DatePipe, UserFormComponent, ToastModule],
  providers:[MessageService],
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent {
  users!: User[];
  editUser!: User;
  isLoggedIn = false;

  cols: Array<{ field: string; header: string }> = [
    { field: 'firstName', header: 'First Name' },
    { field: 'lastName', header: 'Last Name' },
    { field: 'email', header: 'Email Address' },
    { field: 'birthday', header: 'Birthday' },
    { field: 'phone', header: 'Phone' },
    { field: 'createdAt', header: 'Created At' },
    { field: 'lastLogin', header: 'Last Login At' },
    { field: 'edit', header: '' },
    { field: 'delete', header: '' },
  ];

  constructor(private userService: UserService,
              private messageService: MessageService,) {
  }

  ngOnInit() {
    this.isLoggedIn = !!sessionStorage.getItem('auth-token');
    if (this.isLoggedIn) {
      this.getUsers();
    }
  }

  editUserById(user: User){
    if(user.id) {
      this.userService.getUserById(user).subscribe({
        next: (editUser) => {
          this.editUser = editUser;
        },
        error: (error) => {
          let severity = 'error';
          const status = error.status;
          const errorCode = error.error?.errorCode || 'Erro';
          const message = error.error?.message || 'Erro inesperado';
  
          // Erros tratáveis pelo usuário
          if (status === 400 || status === 422) {
            severity = 'warn';
          }
  
          this.messageService.add({
            severity,
            summary: errorCode,
            detail: message
          });
        }
      })
    }
  }

  getUsers(){
    this.userService.getUsers().subscribe({
      next: (users) => {
        this.users = users;
      },
      error: (error) => {
        let severity = 'error';
        const status = error.status;
        const errorCode = error.error?.errorCode || 'Erro';
        const message = error.error?.message || 'Erro inesperado';

        // Erros tratáveis pelo usuário
        if (status === 400 || status === 422) {
          severity = 'warn';
        }

        this.messageService.add({
          severity,
          summary: errorCode,
          detail: message
        });
      }
    })
  }

  deleteUser(user: User){
    this.userService.deleteUserById(user).subscribe({
      next: () => {
        this.getUsers();
      },
      error: (error) => {
        let severity = 'error';
        const status = error.status;
        const errorCode = error.error?.errorCode || 'Erro';
        const message = error.error?.message || 'Erro inesperado';

        // Erros tratáveis pelo usuário
        if (status === 400 || status === 422) {
          severity = 'warn';
        }

        this.messageService.add({
          severity,
          summary: errorCode,
          detail: message
        });
      }
    })
  }
  
}
