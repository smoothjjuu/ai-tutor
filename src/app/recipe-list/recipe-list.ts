import { Component, computed, inject, signal } from '@angular/core';
import { RecipeModel } from '../models';
import { FormsModule } from '@angular/forms';
import { Recipe } from '../recipe';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-recipe-list',
  imports: [RouterLink , FormsModule ],
  templateUrl: './recipe-list.html',
  styleUrl: './recipe-list.css'
})
export class RecipeList {
  private readonly recipeService = inject(Recipe);
  public MOCK_RECIPES: RecipeModel[] = this.recipeService.getRecipes();
  public searchTerm = signal('');
  public readonly filteredRecipes = computed(() => {
    return this.MOCK_RECIPES.filter(recipe => recipe.name.toLowerCase().includes(this.searchTerm().toLowerCase()))
  });
}
