import { Component, OnInit } from '@angular/core';
import { ProductserviceService } from '../productservice.service';
import { Product } from '../product';

@Component({
  selector: 'app-product-display',
  templateUrl: './product-display.component.html',
  styleUrls: ['./product-display.component.css']
})
export class ProductDisplayComponent implements OnInit {

   data : Product[] =[];
  constructor(private d: ProductserviceService) { }

  ngOnInit(): void {

    this.d.getProudctInfo().subscribe(y=> {
        this.data = y;
    })
  }

}
