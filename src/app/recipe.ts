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
}
