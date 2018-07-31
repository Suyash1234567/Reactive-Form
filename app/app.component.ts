import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html'
})

export class AppComponent implements OnInit {
    registerForm: FormGroup;

    submitted = false;
    unamePattern = "^[A-Za-z]+$";
    pwdPattern = "(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}";
    mobnumPattern = "^[0-9]{10}$";
    emailPattern = "^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$";
    empidPAttern = "^[0-9]{4}$";
    constructor(private formBuilder: FormBuilder) { }

    ngOnInit() {
        this.registerForm = this.formBuilder.group({
            firstName: ['', [Validators.required, Validators.pattern(this.unamePattern)]],
            lastName: ['', [Validators.required, Validators.pattern(this.unamePattern)]],
            gender: ['', [Validators.required, Validators.pattern(this.unamePattern)]],
            phn: ['', [Validators.required, Validators.pattern(this.mobnumPattern)]],
            password: ['', [Validators.required, Validators.minLength(8), Validators.maxLength(16)]],
            confpassword: ['', [Validators.required, Validators.minLength(8), Validators.maxLength(16)]],
            num: ['', [Validators.required, Validators.pattern(this.empidPAttern)]],
        });
    }

    // convenience getter for easy access to form fields
    get f() { return this.registerForm.controls; }

    onSubmit() {
        this.submitted = true;

        // stop here if form is invalid
        if (this.registerForm.invalid) {
            return;
        }
        if (this.registerForm.controls["password"]["value"] != this.registerForm.controls["confpassword"]["value"]) {
            alert("Both the password fields doesn't match");
            return;
        }
        localStorage.setItem("firstName", this.registerForm.controls["firstName"]["value"]);
        localStorage.setItem("lastName", this.registerForm.controls["lastName"]["value"]);
        localStorage.setItem("gender", this.registerForm.controls["gender"]["value"]);
        localStorage.setItem("phn", this.registerForm.controls["phn"]["value"]);
        localStorage.setItem("password", this.registerForm.controls["password"]["value"]);
        localStorage.setItem("empID", this.registerForm.controls["num"]["value"]);

        //alert(localStorage.getItem("firstName"));
        console.log(this.registerForm.controls["firstName"]["value"]);
        //alert(this.registerForm.controls[0])
    }
}