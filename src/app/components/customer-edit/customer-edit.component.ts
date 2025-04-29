import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { CustomerService } from './../../service/customer.service';
import { Customer } from './../../customer';

@Component({
  selector: 'app-customer-edit',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, MatSnackBarModule],
  templateUrl: './customer-edit.component.html',
  styleUrls: ['./customer-edit.component.css']
})
export class CustomerEditComponent implements OnInit {
  form!: FormGroup;
  id!: number;

  constructor(
    private route: ActivatedRoute,
    private fb: FormBuilder,
    private customerService: CustomerService,
    private snackBar: MatSnackBar,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.id = +this.route.snapshot.params['id'];

    this.form = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]]
    });

    this.loadCustomer();
  }

  private loadCustomer(): void {
    this.customerService.getCustomerById(this.id).subscribe({
      next: (customer) => this.form.patchValue(customer),
      error: (err) => console.error('❌ Error al cargar cliente:', err)
    });
  }

  updateCustomer(): void {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    const updatedCustomer: Customer = { ...this.form.value };

    this.customerService.updateCustomer(this.id, updatedCustomer).subscribe({
      next: (res) => {
        this.snackBar.open('✅ Cliente actualizado con éxito', 'Cerrar', {
          duration: 3000,
          panelClass: ['snackbar-success']
        });
        
        this.router.navigate(['/customers']);
      },
      error: (err) => {
        this.snackBar.open('❌ Error al actualizar cliente', 'Cerrar', {
          duration: 3000,
          panelClass: ['snackbar-error']
        });
        console.error('❌ Error al actualizar cliente:', err);
      }
    });
  }
}
