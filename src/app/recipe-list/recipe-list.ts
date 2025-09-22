import { Component, signal } from '@angular/core';
import { RecipeModel } from '../models';
import { RecipeDetail } from "../recipe-detail/recipe-detail";
import { MOCK_RECIPES } from '../mock-recipes';

@Component({
  selector: 'app-recipe-list',
  imports: [RecipeDetail],
  templateUrl: './recipe-list.html',
  styleUrl: './recipe-list.css'
})
export class RecipeList {
  protected readonly recipe = signal<RecipeModel>(MOCK_RECIPES[0]);
  MOCK_RECIPES: RecipeModel[] = MOCK_RECIPES;
  
  protected setRecipe(recipe: RecipeModel): void {
    this.recipe.set(recipe);
  }
}
