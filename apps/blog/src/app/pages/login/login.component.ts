import { animate, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

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
  status: string = undefined;

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
    private userService: UserService,
    private router: Router
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
        (response: any) => {
          if (response.status === 'success') {
            status = 'success';
            this.userService.setIdentity(response.token, response.user);
            console.log(response.message);
            this.router.navigate(['inicio']);

          } else {
            status = 'error';
            console.error(response.message);
            console.error('Respuesta:', response);
          }

        },
        error => {
          status = 'error';
          console.error('error:', error);

        }
      );
  }

}
