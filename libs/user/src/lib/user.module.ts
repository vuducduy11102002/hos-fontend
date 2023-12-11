import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './pages/login/login.component';
import { RouterModule } from '@angular/router';
import { userRoutes } from './user.routes';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
@NgModule({
    imports: [CommonModule, FormsModule, ReactiveFormsModule, RouterModule.forChild(userRoutes)],
    declarations: [LoginComponent]
})
export class LibsUserModule {}
