import { Component, Input, OnInit } from '@angular/core';
import { faCircleXmark } from '@fortawesome/free-solid-svg-icons';
import { Sales } from 'src/app/model/sales.model';


@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {

  constructor() { }
  @Input() openModal: Sales = {
    "date": "",
    "order_id": 0,
    "name": "",
    "price": 0,
    "quantity": 0
  };

  exit = faCircleXmark;

  ngOnInit(): void {
  }

  

}
