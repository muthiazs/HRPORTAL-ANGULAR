import { Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard';
import { EmployeesComponent } from './employees/employees';
import { RecruitmentComponent } from './recruitment/recruitment';

export const routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' }, // Default buka dashboard
  { path: 'dashboard', component: DashboardComponent },
  { path: 'employees', component: EmployeesComponent },
  { path: 'recruitment', component: RecruitmentComponent },
];