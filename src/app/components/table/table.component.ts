import { Component, OnInit } from '@angular/core';
import { faSort } from '@fortawesome/free-solid-svg-icons';
import { faFilePdf } from '@fortawesome/free-solid-svg-icons';
import { faFileExcel } from '@fortawesome/free-solid-svg-icons';
import { faEdit } from '@fortawesome/free-solid-svg-icons';
import { SalesService } from 'src/app/services/sales.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {

  constructor(
    private salesSerive : SalesService
  ) { }

  sort = faSort;
  edit= faEdit;
  filePDF = faFilePdf;
  fileEXCEL = faFileExcel;

  public sales: any = []

  ngOnInit(): void {
    this.getSales()
  }

  getSales(){
    this.sales = this.salesSerive.setTotalSale()
  }


}
