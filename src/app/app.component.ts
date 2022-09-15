import { Component } from '@angular/core';
import { Sales } from './model/sales.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'logistic_app';
  
  
  doSomething(){
    this.title = 'abdc'
  }

  openModal(event: Sales){
    console.log(event)
  }
}
