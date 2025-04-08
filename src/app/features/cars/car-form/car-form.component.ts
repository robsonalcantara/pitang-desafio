import {Component, EventEmitter, Input, Output} from '@angular/core';
import {FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators} from '@angular/forms';
import {InputTextModule} from 'primeng/inputtext';
import {FloatLabelModule} from 'primeng/floatlabel';
import {FlexLayoutModule} from '@ngbracket/ngx-layout';
import {SharedModule} from '../../../shared/shared.module';
import {Car} from '../../../models/car.model';
import {CarService} from '../services/car.service';
import { InputMaskModule } from 'primeng/inputmask';
import {MessageService} from 'primeng/api';
import {ToastModule} from 'primeng/toast';

@Component({
  selector: 'app-car-form',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    SharedModule,
    FormsModule,
    InputTextModule,
    FloatLabelModule,
    FlexLayoutModule,
    InputMaskModule,
    ToastModule,
  ],
  providers: [
    CarService,
    MessageService,
  ],
  templateUrl: './car-form.component.html',
  styleUrl: './car-form.component.css'
})
export class CarFormComponent {
  carForm: FormGroup;
  cars: Car[] = [];
  _editCar: Car = {color: '', licensePlate: '', model: ''};
  @Output() updateCarList = new EventEmitter();


  constructor(private fb: FormBuilder,
              private carService: CarService,
              private messageService: MessageService) {
      this.carForm = this.fb.group({
        id: ['', Validators.required],
        year: ['', Validators.required],
        licensePlate: [
          '',
          [
            Validators.required,
            Validators.maxLength(8),
            Validators.pattern(/^[A-Z]{3}-\d{4}$|^[A-Z]{3}\d[A-Z]\d{2}$/)
          ]
        ],
        model: ['', Validators.required],
        color: ['', Validators.required],
        usage: [''],
        usageCount: ['']
      });

      this.carForm.get('licensePlate')?.valueChanges.subscribe(value => {
        if (value) {
          this.carForm
            .get('licensePlate')
            ?.setValue(value.toUpperCase(), { emitEvent: false });
        }
      });
  }

  @Input()
  set editCar(car: Car) {
    this._editCar = car;
    this.updateForm(car)
  }

  get editCar(): Car {
    return this._editCar;
  }

  updateForm(car: Car){
    this.carForm.patchValue({
      id: car.id,
      year: car.year,
      licensePlate: car.licensePlate,
      model: car.model,
      color: car.color,
      usage: car.usage,
      usageCount: car.usageCount
    })
  }

  submit(){
    if (this.editCar?.id){
      this.editByCarId()
    }else{
      this.createCar()
    }
  }

  createCar(): void {
    const carData = {
      ...this.carForm.value
    };

    this.carService.createCar(carData).subscribe({
      next: () => {
        this.limpaFormularios()
        this.updateCarList.emit()
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

  editByCarId(){
    this.carService.editCarById(this.carForm.value).subscribe({
      next: () => {
        this.limpaFormularios()
        this.updateCarList.emit();
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

  limpaFormularios() {
    this.carForm.reset();
    this.editCar = {color: '', licensePlate: '', model: ''};
  }

}
