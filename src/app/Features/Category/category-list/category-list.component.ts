import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../category.service';
import { Category } from '../Models/Category.model';


@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css']
})
export class CategoryListComponent implements OnInit {

categories ?: Category[];

  constructor(private categoryService: CategoryService){

  }

  ngOnInit(): void {
    this.categoryService.getAllCategories().subscribe({
       next:(Response)=> {
         console.log(Response);
         this.categories=Response;
      },
       error:(err)=>{
        console.log(err);
       }


    });
  }

}
