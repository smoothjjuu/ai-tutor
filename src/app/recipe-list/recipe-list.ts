import { Component, computed, signal } from '@angular/core';
import { RecipeModel } from '../models';
import { RecipeDetail } from "../recipe-detail/recipe-detail";
import { MOCK_RECIPES } from '../mock-recipes';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-recipe-list',
  imports: [RecipeDetail, FormsModule ],
  templateUrl: './recipe-list.html',
  styleUrl: './recipe-list.css'
})
export class RecipeList {
  protected readonly recipe = signal<RecipeModel>(MOCK_RECIPES[0]);
  public MOCK_RECIPES: RecipeModel[] = MOCK_RECIPES;
  public searchTerm = signal('');
  public readonly filteredRecipes = computed(() => {
    return this.MOCK_RECIPES.filter(recipe => recipe.name.toLowerCase().includes(this.searchTerm().toLowerCase()))
  });

  protected setRecipe(recipe: RecipeModel): void {
    this.recipe.set(recipe);
  }
}
