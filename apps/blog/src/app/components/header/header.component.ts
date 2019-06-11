import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'nx-blog-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  isCollapsed = false;

  constructor() {
  }

  ngOnInit() {
  }

}
