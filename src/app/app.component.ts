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

  title = 'logistic_app';  
  
  doSomething(){
    this.title = 'abdc'
  }

  openModal(event: Sales){
    console.log(event)
    this.generalService.showModal = true;
  }
}
