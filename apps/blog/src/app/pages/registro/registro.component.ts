import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, Validators } from '@angular/forms';
import { User } from '../../models/user.model';

@Component({
  selector: 'nx-blog-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  pageTitle = 'Registro';
  user: User;
  patterEmail = '^(([^<>()\\[\\]\\\\.,;:\\s@"]+(\\.[^<>()\\[\\]\\\\.,;:\\s@"]+)*)|(".+"))@((\\[[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}])|(([a-zA-Z\\-0-9]+\\.)+[a-zA-Z]{2,}))$';
  /*  formularioRegistro = new FormGroup({
      name: new FormControl(''),
      email: new FormControl(''),
      password: new FormControl(''),
      acepta: new FormControl('')
    });*/

  formularioRegistro = this.fb.group({
    name: ['', [
      Validators.required,
      Validators.minLength(3),
      Validators.pattern('[a-zA-Z ]+')
    ]
    ],
    surname: ['', [
      Validators.required,
      Validators.minLength(3),
      Validators.pattern('[a-zA-Z ]+')
    ]
    ],
    email: ['', [
      Validators.required,
      Validators.minLength(11),
      Validators.email,
      Validators.pattern(this.patterEmail)
    ]
    ],
    password: ['', [
      Validators.required,
      Validators.minLength(6)]
    ],
    acepta: ['', Validators.required]
  });

  // para simplicar el codigo en template en lugar de formularioRegistro.controls.name
  get name(): AbstractControl {
    return this.formularioRegistro.get('name');
  }

  get surname(): AbstractControl {
    return this.formularioRegistro.get('surname');
  }

  get email(): AbstractControl {
    return this.formularioRegistro.get('email');
  }

  get password(): AbstractControl {
    return this.formularioRegistro.get('password');
  }

  get acepta(): AbstractControl {
    return this.formularioRegistro.get('acepta');
  }

  constructor(
    private fb: FormBuilder
  ) {
  }

  ngOnInit(): void {
  }

  onSubmit(): void {
    // TODO: Use EventEmitter with form value
    this.user = this.formularioRegistro.value;
    this.formularioRegistro.reset();
    console.warn(this.formularioRegistro.value);
    console.warn(this.user);


  }

}
