import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  form: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.form = this.formBuilder.group({
      first: ['', Validators.required],
      last: ['', Validators.required],
    });
  }

  submit() {
    if (this.form.valid) {
      console.log(this.form);
    }
  }
}
