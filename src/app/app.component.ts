import { Component } from '@angular/core';
import { Sales } from './model/sales.model';
import { GeneralService } from './services/general.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  
  constructor(
    public generalService: GeneralService
  ){} 

  public saleSelected: Sales = {
    "date": "123",
    "order_id": 1,
    "name": "Product",
    "price": 110,
    "quantity": 1,
    "total": 0
  };
  
  openModal(event: Sales){
    this.saleSelected = event;
    this.generalService.showModal = true;
  }
}
