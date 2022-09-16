import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { faCircleXmark } from '@fortawesome/free-solid-svg-icons';
import { Sales } from 'src/app/model/sales.model';
import { GeneralService } from 'src/app/services/general.service';


@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {

  constructor(
    private formBuilder: FormBuilder,
    public generalServices: GeneralService
  ) {
    this.buildForm()
  }

  @Input() sale_Selected: Sales = {
    "date": "",
    "order_id": 0,
    "name": "Ron",
    "price": 0,
    "quantity": 0
  };

  public form!: FormGroup;  
  public isEditView = true;
  public exit = faCircleXmark;

  public buildForm() {
    this.form = this.formBuilder.group({
      date: [{value: this.sale_Selected.date, disabled: this.isEditView}],
      order_id: [{value: this.sale_Selected.order_id, disabled: this.isEditView}],
      name: [{value: this.sale_Selected.name, disabled: this.isEditView}],
      price: [this.sale_Selected.price],
      quantity: [this.sale_Selected.quantity],
      total: [{value: `$${Number(this.sale_Selected.quantity) * Number(this.sale_Selected.price)}`,disabled:true}]
    })
  }

  ngOnInit(): void {
  }

  ngOnChanges(){
    this.buildForm()
  }

  closeModal() {
    this.generalServices.showModal = false;
  }
  
}
