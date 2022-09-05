import { Injectable, OnInit } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SalesService implements OnInit {

  constructor() { }

  public total_sales =[{
    "date": "2021-11-25",
    "order_id": 1062,
    "name": "Basil - Thai",
    "price": 16.95,
    "quantity": 2
  }, {
    "date": "2022-02-17",
    "order_id": 9824,
    "name": "Bread - Pumpernickel",
    "price": 52.78,
    "quantity": 1
  }, {
    "date": "2022-06-13",
    "order_id": 5888,
    "name": "Noodles - Cellophane, Thin",
    "price": 40.85,
    "quantity": 3
  }, {
    "date": "2022-07-16",
    "order_id": 4480,
    "name": "Wine - Sawmill Creek Autumn",
    "price": 42.77,
    "quantity": 3
  }, {
    "date": "2022-07-23",
    "order_id": 5970,
    "name": "Pie Pecan",
    "price": 31.04,
    "quantity": 2
  }, {
    "date": "2022-05-18",
    "order_id": 5597,
    "name": "Vacuum Bags 12x16",
    "price": 56.27,
    "quantity": 1
  }, {
    "date": "2022-07-22",
    "order_id": 8096,
    "name": "Wine - Zinfandel California 2002",
    "price": 38.84,
    "quantity": 4
  }, {
    "date": "2022-05-08",
    "order_id": 8936,
    "name": "Remy Red",
    "price": 37.58,
    "quantity": 1
  }, {
    "date": "2022-07-26",
    "order_id": 2859,
    "name": "Miso Paste White",
    "price": 17.43,
    "quantity": 5
  }, {
    "date": "2021-12-05",
    "order_id": 7725,
    "name": "Nestea - Iced Tea",
    "price": 12.09,
    "quantity": 3
  }]

  ngOnInit(): void {
    this.setTotalSale()
  }

  setTotalSale(){

    this.total_sales = this.total_sales.map((sale)=>{
      return {
        ...sale,
        total: (sale.price * sale.quantity).toFixed(2)
      }
    })

    console.log(this.total_sales)
    return this.total_sales;
  }



}
