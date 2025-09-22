import { Component, computed, inject, signal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Recipe } from '../recipe';

@Component({
  selector: 'app-recipe-detail',
  imports: [],
  templateUrl: './recipe-detail.html',
  styleUrl: './recipe-detail.css'
})
export class RecipeDetail {
  private router = inject(ActivatedRoute );
  private recipeService = inject(Recipe );

  protected readonly servings = signal(1); 
  private id = this.router.snapshot.paramMap.get('id') ?? '0';
  public currentRecipe = this.recipeService.getRecipeById(this.id);
  protected readonly adjustedIngredients  = computed(() => {
    return this.currentRecipe?.ingredients.map(ingredient => {
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
