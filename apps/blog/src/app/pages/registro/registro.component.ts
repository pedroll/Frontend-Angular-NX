import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'nx-blog-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  constructor(
    public pageTitle = 'Identificate'
  ) {
  }

  ngOnInit() {
  }

}
