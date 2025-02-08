import { IExtendedMeal } from './../../interfaces/iextended-meal';
import { Component, inject, OnInit } from '@angular/core';
import { MealsService } from '../../services/meals.service';
import { ICategory } from '../../interfaces/icategory';
import { IMeal } from '../../interfaces/imeal';
import { FormsModule } from '@angular/forms';
import { CardComponent } from '../card/card.component';

@Component({
  selector: 'app-categories',
  imports: [FormsModule, CardComponent],
  templateUrl: './categories.component.html',
  styleUrl: './categories.component.scss',
})
export class CategoriesComponent implements OnInit {
  private readonly _mealsService: MealsService = inject(MealsService);

  categories!: ICategory[];
  allMeals!: IExtendedMeal[];
  meals!: IMeal[];
  selectedCategory: string = 'all';
  categoryTriggered: boolean = false;

  ngOnInit(): void {
    this._mealsService.getAllCategories().subscribe({
      next: (result) => (this.categories = result.meals),
    });

    this.getAllMeals();
  }

  getMealsPerCategory(category: string): void {
    this.selectedCategory = category;
    this._mealsService.filterMealsByCategory(category).subscribe({
      next: (result) => (this.meals = result.meals),
      complete: () => (this.categoryTriggered = true),
    });
  }

  getAllMeals(): void {
    this.selectedCategory = 'all';
    this._mealsService.getMeal().subscribe({
      next: (response) => (this.allMeals = response.meals),
      complete: () => (this.categoryTriggered = false),
    });
  }
}
