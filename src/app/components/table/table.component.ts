import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { faSort } from '@fortawesome/free-solid-svg-icons';
import { faFilePdf } from '@fortawesome/free-solid-svg-icons';
import { faFileExcel } from '@fortawesome/free-solid-svg-icons';
import { faEdit } from '@fortawesome/free-solid-svg-icons';
import { Sales } from 'src/app/model/sales.model';
import { SalesService } from 'src/app/services/sales.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {

  @Output() openModal = new EventEmitter();
 
  constructor(
    private salesSerive : SalesService
  ) { }

  public sort = faSort;
  public edit= faEdit;
  public filePDF = faFilePdf;
  public fileEXCEL = faFileExcel;
  public sales: any = []

  ngOnInit(): void {
    this.getSales()
  }

  handleClick(sale:Sales){
    console.log(sale)
    this.openModal.emit(sale)
  }

  getSales(){
    this.sales = this.salesSerive.setTotalSale()
  }


}
