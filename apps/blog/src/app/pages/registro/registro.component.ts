import { animate, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, Validators } from '@angular/forms';
import { User } from '../../models/user.model';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'nx-blog-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css'],
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
export class RegistroComponent implements OnInit {

  pageTitle = 'Registro';
  user: User;
  status: string = undefined;
  // tslint:disable-next-line:max-line-length
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

  constructor(
    private fb: FormBuilder,
    private userService: UserService
  ) {
  }

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

  ngOnInit(): void {
  }

  onSubmit(): void {
    // TODO: Use EventEmitter with form value
    delete this.formularioRegistro.value.acepta;
    this.userService.register(this.formularioRegistro.value)
      .subscribe(
        response => {
          console.log('Respuesta:', response);
          if (response.status === 'success') {
            this.status = response.status;
            this.formularioRegistro.reset();
          } else {
            this.status = 'error';
            console.error('Error:', response);
          }

        },
        error => {
          this.status = 'error';
          console.error('error:', error);

        }
      );
  }

}
