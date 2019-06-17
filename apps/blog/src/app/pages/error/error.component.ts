import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'nx-blog-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.css']
})
export class ErrorComponent implements OnInit {

  pageTitle = 'Error pagina no encontrada';
  items: Array<string> = [
    'The first choice!',
    'And another choice for you.',
    'but wait! A third!'
  ];

  onHidden(): void {
    console.log('Dropdown is hidden');
  }

  onShown(): void {
    console.log('Dropdown is shown');
  }

  isOpenChange(): void {
    console.log('Dropdown state is changed');
  }
  constructor() {
  }

  ngOnInit(): void {
  }

}
