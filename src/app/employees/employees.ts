import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-employees',
  standalone: true,
  imports: [CommonModule, MatTableModule, MatButtonModule, MatIconModule, MatCardModule],
  templateUrl: './employees.html',
  styleUrl: './employees.css'
})
export class EmployeesComponent {
  employees = [
    { name: 'Muthia Z.', department: 'IT', status: 'Active' },
    { name: 'Sarah Jenkins', department: 'HR', status: 'Remote' },
    { name: 'Budi Santoso', department: 'Finance', status: 'On Leave' }
  ];
}