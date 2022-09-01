import { Component, OnInit } from '@angular/core';
import { faHandshake } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  public userName = 'John Doe'

  handshake = faHandshake;
  user = faUser

  ngOnInit(): void {
  }

}
