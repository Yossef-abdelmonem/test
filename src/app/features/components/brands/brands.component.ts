import { Ibrand } from './../../../core/interfaces/ibrand.interface';
import { Component } from '@angular/core';
import { BrandService } from '../../../shared/services/brand/brand.service';

@Component({
  selector: 'app-brands',
  imports: [],
  templateUrl: './brands.component.html',
  styleUrl: './brands.component.css'
})
export class BrandsComponent {
 constructor(private _BrandService:BrandService){}


allbrand !: Ibrand []


  ngOnInit(): void {
    this._BrandService.getAllbrand().subscribe({
      next:(res)=>{
        this.allbrand= res.data
        console.log(res.data);

      },
      error:(err)=>{
        console.log(err);

      }
    })
  }
}
