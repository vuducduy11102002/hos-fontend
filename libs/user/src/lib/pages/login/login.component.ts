import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
    selector: 'hospital-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
    @ViewChild('container')
    container!: ElementRef;
    loginFormGroup!: FormGroup;
    isSubmitted = false;
    authError = false;
    authMessage = 'Email or password are wrong';
    constructor(private formBuilder: FormBuilder, private auth: AuthService) {}

    ngOnInit(): void {
        this._initLoginForm();
    }

    signIn() {
        this.container.nativeElement.classList.remove('right-panel-active');
    }

    signUp() {
        this.container.nativeElement.classList.add('right-panel-active');
    }

    private _initLoginForm(): void {
        this.loginFormGroup = this.formBuilder.group({
            email: ['', [Validators.required, Validators.email]],
            password: ['', Validators.required]
        });
    }

    get loginForm() {
        return this.loginFormGroup.controls;
    }

    onSubmit() {
        this.isSubmitted = true;
        if (this.loginFormGroup.invalid) return;
        const logindata = {
            email: this.loginForm['email'].value,
            password: this.loginForm['password'].value
        };
        this.auth.login(logindata.email, logindata.password).subscribe(
            (user) => {
                this.authError = false;
            },
            (error: HttpErrorResponse) => {
                this.authError = true;
                if (error.status !== 500) {
                    this.authMessage = 'Error in the Server , please  try again later';
                }
            }
        );
    }
}
