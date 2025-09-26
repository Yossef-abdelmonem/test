import { Component, OnInit } from '@angular/core';
import { CatagoriesService } from '../../../shared/services/Categories/catagories.service';
import { ICategory } from '../../../core/interfaces/icategory.interface';

@Component({
  selector: 'app-categories',
  imports: [],
  templateUrl: './categories.component.html',
  styleUrl: './categories.component.css'
})
export class CategoriesComponent implements OnInit{

  constructor(private _CatagoriesService:CatagoriesService){}


  allCategories!:ICategory[]


  ngOnInit(): void {
    this._CatagoriesService.getAllCategories().subscribe({
      next:(res)=>{
        this.allCategories = res.data
        console.log(res.data);

      },
      error:(err)=>{
        console.log(err);

      }
    })
  }



}
