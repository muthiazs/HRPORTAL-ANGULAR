import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router'; // PENTING BUAT ROUTING!
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterModule, MatSidenavModule, MatListModule, MatIconModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  title = 'HR Portal';
  
  // Menu sekarang punya properti 'link'
  menuItems = [
    { name: 'Dashboard', icon: 'dashboard', link: '/dashboard' },
    { name: 'Employees', icon: 'people', link: '/employees' },
    { name: 'Recruitment', icon: 'work', link: '/recruitment' }, 
  ];
}