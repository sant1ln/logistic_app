import { Component, OnInit } from '@angular/core';
import { faCircleXmark } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {

  constructor() { }

  exit = faCircleXmark;

  ngOnInit(): void {
  }

}
