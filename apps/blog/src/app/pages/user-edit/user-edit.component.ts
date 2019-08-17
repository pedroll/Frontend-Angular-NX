import { animate, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, Validators } from '@angular/forms';
import { User } from '../../models/user.model';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'nx-blog-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css'],
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
export class UserEditComponent implements OnInit {

  pageTitle = 'Ajustes de usuario';
  user: User;
  status: string = undefined;

  // tslint:disable-next-line:max-line-length
  patterEmail = '^(([^<>()\\[\\]\\\\.,;:\\s@"]+(\\.[^<>()\\[\\]\\\\.,;:\\s@"]+)*)|(".+"))@((\\[[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}])|(([a-zA-Z\\-0-9]+\\.)+[a-zA-Z]{2,}))$';
  formularioEditar = this.fb.group({
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
    description: ['', []
    ],
    image: ['', []
    ]
  });

  constructor(
    private fb: FormBuilder,
    private userService: UserService
  ) {
    this.user = this.userService.getIdentity();
    this.formularioEditar.setValue({
      name: this.user.name,
      surname: this.user.surname,
      email: this.user.email,
      description: this.user.description,
      image: this.user.image

    });

  }

  // para simplicar el codigo en template en lugar de formularioEditar.controls.name
  get name(): AbstractControl {
    return this.formularioEditar.get('name');
  }

  get surname(): AbstractControl {
    return this.formularioEditar.get('surname');
  }

  get email(): AbstractControl {
    return this.formularioEditar.get('email');
  }

  get description(): AbstractControl {
    return this.formularioEditar.get('password');
  }

  get image(): AbstractControl {
    return this.formularioEditar.get('image');
  }

  ngOnInit(): void {
  }

  onSubmit(): void {
    // TODO: Use EventEmitter with form value
    this.user = new User(
      this.formularioEditar.value.name,
      this.formularioEditar.value.surname,
      this.formularioEditar.value.email,
      undefined,
      this.formularioEditar.value.id,
      this.formularioEditar.value.description,
      this.formularioEditar.value.image
    );

    this.userService.update(this.userService.getTokeny(), this.user)
      .subscribe(
        response => {
          console.log('Respuesta:', response);
          if (response.status === 'success') {
            this.status = response.status;
            // this.formularioEditar.reset();
            this.userService.setIdentity(this.userService.token, this.user);
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
