import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MealsService {
  constructor(private readonly _httpClint: HttpClient) {}

  getAllCategories(): Observable<any> {
    return this._httpClint.get(
      'https://www.themealdb.com/api/json/v1/1/list.php?c=list'
    );
  }

  filterMealsByCategory(category: string): Observable<any> {
    return this._httpClint.get(
      `https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`
    );
  }

  getMeal(mealId: string = ''): Observable<any> {
    return this._httpClint.get(
      `https://www.themealdb.com/api/json/v1/1/search.php?s=${mealId}`
    );
  }
}
