import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminPageComponent } from './admin-page/admin-page.component';
import { AdminAuthComponent } from './admin-auth/admin-auth.component';



@NgModule({
  declarations: [AdminPageComponent, AdminAuthComponent],
  imports: [
    CommonModule
  ]
})
export class AdminModule { }
