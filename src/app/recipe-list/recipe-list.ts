import { Component, computed, signal } from '@angular/core';
import { RecipeModel } from '../models';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-recipe-list',
  imports: [JsonPipe],
  templateUrl: './recipe-list.html',
  styleUrl: './recipe-list.css'
})
export class RecipeList {

  protected readonly title = signal('Smart Recipe Box');

  protected readonly recipe = signal<RecipeModel>({
    id: 1,
    name: 'Spaghetti Carbonara',
    description: 'A classic Italian pasta dish.',
    imgUrl: 'https://via.placeholder.com/300x200.png?text=Spaghetti+Carbonara',
    ingredients: [
      { name: 'Spaghetti', quantity: 200, unit: 'g' },
      { name: 'Guanciale', quantity: 100, unit: 'g' },
      { name: 'Egg Yolks', quantity: 4, unit: 'each' },
      { name: 'Pecorino Romano Cheese', quantity: 50, unit: 'g' },
      { name: 'Black Pepper', quantity: 1, unit: 'tsp' },
    ],
  });

  protected readonly servings = signal(0); 
  
  protected readonly adjustedIngredients  = computed(() => {
    return this.recipe().ingredients.map(ingredient => {
      return {
        ...ingredient,
        quantity: ingredient.quantity * this.servings(),
      };
    });
  });
  protected loadRecipe(): void {
    this.recipe.set({ 
      id: 2,
      name: 'Caprese Salad',
      description: 'A simple and refreshing Italian salad.',
      imgUrl: 'https://via.placeholder.com/300x200.png?text=Caprese+Salad',
      ingredients: [
        { name: 'Tomatoes', quantity: 4, unit: 'each' },
        { name: 'Fresh Mozzarella', quantity: 200, unit: 'g' },
        { name: 'Fresh Basil', quantity: 1, unit: 'bunch' },
        { name: 'Extra Virgin Olive Oil', quantity: 2, unit: 'tbsp' },
      ],
    });
  }

  protected increaseServing(): void {
    this.servings.update(currentVal => currentVal+1);
  }
  protected decreaseServing(): void {
    this.servings.update(currentVal => currentVal-1);
  }
}
