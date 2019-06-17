import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'nx-blog-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  isCollapsed = false;

  constructor(
    private userService: UserService
  ) {

  }

  ngOnInit(): void {
  }

  logout(): void {
    this.userService.logout();
  }

}
