import { Component, computed, inject, signal } from '@angular/core';
import { RecipeModel } from '../models';
import { RecipeDetail } from "../recipe-detail/recipe-detail";
import { FormsModule } from '@angular/forms';
import { Recipe } from '../recipe';

@Component({
  selector: 'app-recipe-list',
  imports: [RecipeDetail, FormsModule ],
  templateUrl: './recipe-list.html',
  styleUrl: './recipe-list.css'
})
export class RecipeList {
  private readonly recipeService = inject(Recipe);
  protected readonly recipe = signal<RecipeModel>(this.recipeService.getRecipes()[0]);
  public MOCK_RECIPES: RecipeModel[] = this.recipeService.getRecipes();
  public searchTerm = signal('');
  public readonly filteredRecipes = computed(() => {
    return this.MOCK_RECIPES.filter(recipe => recipe.name.toLowerCase().includes(this.searchTerm().toLowerCase()))
  });

  protected setRecipe(recipe: RecipeModel): void {
    this.recipe.set(recipe);
  }
}
