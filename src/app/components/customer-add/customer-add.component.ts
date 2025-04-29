import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { CustomerService } from '../../service/customer.service';
import { Customer } from '../../customer';

@Component({
  selector: 'app-customer-add',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, MatSnackBarModule],
  templateUrl: './customer-add.component.html',
  styleUrls: ['./customer-add.component.css']
})
export class CustomerAddComponent implements OnInit {
  form!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private customerService: CustomerService,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]]
    });
  }

  addCustomer(): void {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    const newCustomer: Customer = { ...this.form.value };

    this.customerService.createCustomer(newCustomer).subscribe({
      next: (res) => {
        this.snackBar.open('✅ Cliente guardado con éxito', 'Cerrar', {
          duration: 3000,
          panelClass: ['snackbar-success']
        });

        console.log('Cliente guardado:', res);
        this.form.reset();
        
      },
      error: (err) => {
        this.snackBar.open('❌ Error al guardar cliente', 'Cerrar', {
          duration: 3000,
          panelClass: ['snackbar-error']
        });
        console.error('Error al guardar cliente:', err);
      }
    });
  }
}
