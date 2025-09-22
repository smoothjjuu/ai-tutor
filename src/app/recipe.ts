import { Injectable } from '@angular/core';
import { RecipeModel } from './models';
import { MOCK_RECIPES } from './mock-recipes';

@Injectable({
  providedIn: 'root'
})
export class Recipe {
  
  public getRecipes(): RecipeModel[] {
    return MOCK_RECIPES;
  }

  public getRecipeById(id: string): RecipeModel | undefined {
    return this.getRecipes().find(recipe => recipe.id.toString() === id);
  }
}
