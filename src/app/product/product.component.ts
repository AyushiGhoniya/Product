import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

 products = [
    {id: 1, name: "BMW"},
    {id: 2, name: "RR"},
    {id: 3, name: "Nano"},
    {id: 4, name: "Audi"},
    {id: 5, name: "Jaguar"},
    {id: 6, name: "Swift"},
    {id: 7, name: "i20"},
    {id: 8, name: "i10"},
    {id: 9, name: "Mercedes-Benz"},
    {id: 10, name: "Volkswagen"},
  ]

  constructor() { }

  ngOnInit() {
  }
}

