import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatIconModule],
  templateUrl: './dashboard.html', 
  styleUrl: './dashboard.css',
})
export class DashboardComponent {
  stats = [
    {
      title: 'Total Employees',
      value: '1,240',
      icon: 'groups',
      color: '#3f51b5',
      desc: '+12 hires',
    },
    {
      title: 'Open Positions',
      value: '8',
      icon: 'work_outline',
      color: '#4caf50',
      desc: 'Hiring ASAP',
    },
    { title: 'Turnover Rate', value: '2.1%', icon: 'trending_down', color: '#f44336', desc: 'Low' },
  ];
}
