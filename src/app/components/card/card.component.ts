import { response } from 'express';
import { MealsService } from './../../services/meals.service';
import { Component, inject, Input, OnInit } from '@angular/core';
import { IExtendedMeal } from '../../interfaces/iextended-meal';

@Component({
  selector: 'app-card',
  imports: [],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss',
})
export class CardComponent implements OnInit {
  private readonly _mealService: MealsService = inject(MealsService);

  @Input({ required: true })
  imagePath!: string;

  @Input({ required: true })
  title!: string;

  @Input({ required: true })
  id!: string;

  area!: string;
  youtubeLink!: string;

  ngOnInit(): void {
    this._mealService.getMeal(this.title).subscribe({
      next: (response) => {
        const meal: IExtendedMeal = response.meals[0];
        this.area = meal.strArea;
        this.youtubeLink = meal.strYoutube;
      },
    });
  }
}
