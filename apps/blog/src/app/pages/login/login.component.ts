import { animate, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, Validators } from '@angular/forms';

import { User } from '../../models/user.model';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'nx-blog-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  animations: [
    trigger('entraSaleTrigger', [
      transition(':enter', [
        style({opacity: 0}),
        animate('0.6s', style({opacity: 1}))
      ]),
      transition(':leave', [
        animate('0.6s', style({opacity: 0}))
      ])
    ]),
    trigger('entraTrigger', [
      transition(':enter', [
        style({opacity: 0}),
        animate('0.6s', style({opacity: 1}))
      ])
    ]),
    trigger('saleTrigger', [
      transition(':leave', [
        animate('0.6s', style({opacity: 0}))
      ])
    ])
  ]
})
export class LoginComponent implements OnInit {

  pageTitle = 'Login';
  private user: User;
  status: string = undefined;
  private identity: User;
  private token: any;

// tslint:disable-next-line:max-line-length
  patterEmail = '^(([^<>()\\[\\]\\\\.,;:\\s@"]+(\\.[^<>()\\[\\]\\\\.,;:\\s@"]+)*)|(".+"))@((\\[[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}])|(([a-zA-Z\\-0-9]+\\.)+[a-zA-Z]{2,}))$';
  formularioLogin = this.fb.group({
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
    ]
  });

  constructor(
    private fb: FormBuilder,
    private userService: UserService
  ) {
  }

  ngOnInit(): void {
  }

  // para simplicar el codigo en template en lugar de formularioRegistro.controls.name
  get email(): AbstractControl {
    return this.formularioLogin.get('email');
  }

  get password(): AbstractControl {
    return this.formularioLogin.get('password');
  }

  onSubmit(): void {
    // TODO: Use EventEmitter with form value
    this.userService.login(this.formularioLogin.value)
      .subscribe(
        response => {
          if (response.status === 'success') {
            this.status = 'success';
            this.userService.token = response.token;
            this.userService.identity = response.user;

            // persistir datos en local storage
            // console.log('user:', this.user);
            // console.log('token:', this.token);
            console.log(response.message);
            localStorage.setItem('tokem', this.token);
            localStorage.setItem('identity', JSON.stringify(this.identity));
          } else {
            this.status = 'error';
            console.error(response.message);
            console.error('Respuesta:', response);
          }

        },
        error => {
          this.status = 'error';
          console.error('error:', error);

        }
      );
  }

}
