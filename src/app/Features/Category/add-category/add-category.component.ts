import { Component, OnDestroy } from '@angular/core';
import { AddCategoryRequest } from '../Models/add-category-request.model';
import { CategoryService } from '../category.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.css'],
})
export class AddCategoryComponent implements OnDestroy{
  model: AddCategoryRequest;
  private AddCategorySubscription?: Subscription;

  constructor(private CategoryService: CategoryService) {
    this.model = {
      name: '',
      urlHandle: '',
    };
  }


  onFormSubmit() {
    this.AddCategorySubscription = this.CategoryService.addCategory(
      this.model
    ).subscribe({
      next: (responce) => {
        console.log(responce);
      },
      error: (err) => {
        console.log(err);
      },
    });
  }

ngOnDestroy(): void {
  this.AddCategorySubscription?.unsubscribe();
}



}
