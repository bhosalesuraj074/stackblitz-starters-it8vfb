import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css'],
})
export class ReactiveFormComponent implements OnInit {
  myForm!: FormGroup;

  constructor() {
    this.createForm();
  }
  ngOnInit() {}

  createForm() {
    this.myForm = new FormGroup({
      username: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required]),
    });
  }
  onSubmit(): void {
    console.log(this.myForm);
    console.log(this.myForm.controls['email'].valid);
  }
}
