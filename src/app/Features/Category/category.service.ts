import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AddCategoryRequest } from './Models/add-category-request.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})  
export class CategoryService {

  constructor(private http: HttpClient) { }

  addCategory(model:AddCategoryRequest):Observable<void>{
    return this.http.post<void>('https://localhost:7207/api/Categories',model)
  }
}