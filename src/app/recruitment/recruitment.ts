import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-recruitment',
  standalone: true,
  imports: [CommonModule, MatListModule, MatIconModule, MatCardModule, MatButtonModule],
  templateUrl: './recruitment.html',
  styleUrl: './recruitment.css'
})
export class RecruitmentComponent {
  candidates = [
    { name: 'Aliando Syarief', role: 'Frontend Dev', status: 'Interview HR' },
    { name: 'Prilly Latuconsina', role: 'Product Owner', status: 'Technical Test' },
    { name: 'Reza Rahadian', role: 'DevOps Engineer', status: 'Final Offering' },
  ];
}