import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-td-form',
  templateUrl: './td-form.component.html',
  styleUrls: ['./td-form.component.css']
})
export class TdFormComponent implements OnInit {
  @ViewChild('f') signupForm!: NgForm;
  defaultQuestion = 'pet';
  answer = '';
  genders = ['male', 'female'];
  user = {
    userName: '',
    email: '',
    secretQuestion: '',
    questionAnswer: '',
    gender: ''
  };
  submitted = false;

  constructor() { }

  ngOnInit() {
  }

  suggestUserName() {
    const suggestUserName = 'SuperUser';
    this.signupForm.form.patchValue({
      userData: {
        username: suggestUserName
      }
    });
  }

  onSubmit() {
    this.user.userName = this.signupForm.value.userData.username;
    this.user.email = this.signupForm.value.userData.email;
    this.user.secretQuestion = this.signupForm.value.secret;
    this.user.questionAnswer = this.signupForm.value.questionAnswer;
    this.user.gender = this.signupForm.value.gender;
    this.submitted = true;
    this.signupForm.reset();
  }

}
