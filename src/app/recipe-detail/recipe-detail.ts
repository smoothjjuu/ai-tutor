import { Component, computed, input, signal } from '@angular/core';
import { RecipeModel } from '../models';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-recipe-detail',
  imports: [JsonPipe],
  templateUrl: './recipe-detail.html',
  styleUrl: './recipe-detail.css'
})
export class RecipeDetail {
  public readonly recipe = input<RecipeModel | undefined>();

  protected readonly servings = signal(1); 
  
  protected readonly adjustedIngredients  = computed(() => {
    return this.recipe()?.ingredients.map(ingredient => {
      return {
        ...ingredient,
        quantity: ingredient.quantity * this.servings(),
      };
    });
  });

  protected increaseServing(): void {
    this.servings.update(currentVal => currentVal+1);
  }
  protected decreaseServing(): void {
    this.servings.update(currentVal => currentVal-1);
  }
}
