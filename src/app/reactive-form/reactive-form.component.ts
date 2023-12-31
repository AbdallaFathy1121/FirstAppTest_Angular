import { Component, OnInit } from '@angular/core';
import { AbstractControl, AsyncValidatorFn, FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {
  genders = ['male', 'female'];
  signupForm!: FormGroup;
  forbiddenUsernames = ['abdala', 'omar'];
  
  constructor() { }
  
  ngOnInit() {
    this.signupForm = new FormGroup({
      'userData': new FormGroup({
        'username': new FormControl(
          null, 
          [Validators.required, this.forbiddenNames.bind(this)]
        ),
        'email': new FormControl(
          null, 
          [Validators.required, Validators.email],
        )
      }),
      'gender': new FormControl('male'),
      'hobbies': new FormArray([])
    });
  }
  
  onSubmit() {
    console.log(this.signupForm);
  }

  onAddHobby() {
    const control = new FormControl(null, Validators.required);
    (<FormArray>this.signupForm.get('hobbies')).push(control);
  }

  get hobbyControls(): AbstractControl[] {
    const controls = (<FormArray>this.signupForm.get('hobbies')).controls;
    return controls;
  }

  forbiddenNames(control: FormControl): {[s: string]: boolean} | null {
    if(this.forbiddenUsernames.indexOf(control.value) !== -1) {
      return {"nameIsForbidden": true};
    }
    return null;
  }

  forbiddenEmails(control: FormControl): Promise<any> | Observable<any> | null {
    const promise = new Promise<any>((resolve, reject) => {
      setTimeout(() => {
        if(control.value === 'test@test.com') {
          resolve({'emailIsForbidden': true});
        } else {
          resolve(null);
        }
      }, 1000);
    });
    return promise;
  }




}
