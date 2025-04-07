import { Component } from '@angular/core';
import {DatePipe} from '@angular/common';
import {CarFormComponent} from './car-form/car-form.component';
import {SharedModule} from '../../shared/shared.module';
import {Car} from '../../models/car.model';
import {User} from '../../models/user.model';
import {CarService} from './services/car.service';
import {MessageService} from 'primeng/api';
import {HttpErrorResponse} from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import {ToastModule} from 'primeng/toast';
import { CheckboxModule } from 'primeng/checkbox';

@Component({
  selector: 'app-cars',
  standalone: true,
  imports: [SharedModule, DatePipe, FormsModule, CheckboxModule, CarFormComponent, ToastModule],
  providers: [
    CarService,
    MessageService
  ],
  templateUrl: './cars.component.html',
  styleUrl: './cars.component.css'
})
export class CarsComponent {
  users!: User[];
  cars!: Car[];
  editCar: Car = { id: '', year: 0, licensePlate: '', model: '', color: '', usage: false, usageCount: 0 };

  cols: Array<{ field: string; header: string }> = [
    { field: 'year', header: 'Year' },
    { field: 'licensePlate', header: 'License Plate' },
    { field: 'model', header: 'Model' },
    { field: 'color', header: 'Color' },
    { field: 'usage', header: 'Usage' },        
    { field: 'usageCount', header: 'Count' }, 
    { field: 'edit', header: '' },
    { field: 'delete', header: '' },
    ];

  constructor(private carService: CarService,
              private messageService: MessageService,) {
  }

  ngOnInit() {
    this.getCars()
  }

  getCars(){
    this.carService.getCars().subscribe({
      next: (cars) => {
        this.cars = cars;
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

  editCarById(car: Car){
    if(car.id) {
      this.carService.getCarById(car).subscribe({
        next: (editCar) => {
          this.editCar = editCar;
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

  deleteCar(car: Car){
    this.carService.deleteCarById(car).subscribe({
      next: () => {
        this.getCars();
      },
      error: (error) => {
        let severity = 'error';
        const status = error.status;
        const errorCode = error.error?.errorCode || 'Erro';
        const message = error.error?.message || 'Erro inesperado';

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

  carUsage(car: Car) {
    
    if (car.usage) {
      car.usageCount = (car.usageCount || 0) + 1; 
    }
    this.carService.editCarById(car).subscribe({
      next: () => {
        this.getCars();
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
