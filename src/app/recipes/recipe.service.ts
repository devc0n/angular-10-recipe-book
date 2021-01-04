import {Recipe} from './recipe.model';
import {EventEmitter, Injectable} from '@angular/core';
import {Ingredient} from "../shared/ingredient.model";
import {ShoppingListService} from "../shopping-list/shopping-list.service";

@Injectable()
export class RecipeService {

  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe('test recipe one', 'just a test recipe one', 'https://cdn.pixabay.com/photo/2016/06/15/19/09/food-1459693_1280.jpg', [
      new Ingredient('Burger', 1),
      new Ingredient('French fries', 20)
    ]),
    new Recipe('test recipe two', 'just a test recipe two', 'https://cdn.pixabay.com/photo/2016/06/15/19/09/food-1459693_1280.jpg', [
      new Ingredient('Fish', 1),
      new Ingredient('French fries', 20)
    ])
  ];

  constructor(private shoppingListService: ShoppingListService) {

  }

  getRecipes(): Recipe[] {
    return this.recipes.slice();
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]): void {
    this.shoppingListService.addIngredients(ingredients);
  }

}
