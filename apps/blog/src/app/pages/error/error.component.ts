import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'nx-blog-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.css']
})
export class ErrorComponent implements OnInit {

  pageTitle = 'Error pagina no encontrada';

  constructor() {
  }

  ngOnInit() {
  }

}
