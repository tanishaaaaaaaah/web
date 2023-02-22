import { EventEmitter, Injectable } from "@angular/core";
import { Ingredient } from "../shared/ingredient.model";
import { ShoppingListService } from "../shopping-list/shopping-list.service";
import { Recipe } from "./recipe.model";

@Injectable()
export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();
  recipesChanged = new EventEmitter<Recipe[]>();

  private recipes: Recipe[] = [
    new Recipe(
      'Butter Chicken',
      'Chicken makhanwala',
      'https://www.licious.in/blog/wp-content/uploads/2020/10/butter-chicken-.jpg',
      [
        new Ingredient('Chicken', 3),
        new Ingredient('Ketchup', 2),
        new Ingredient('Curd', 6),
      ]
    ),
    new Recipe(
      'Utappa',
      'This is healthy',
      'https://www.indianhealthyrecipes.com/wp-content/uploads/2022/07/uttapam-recipe-swasthi.jpg',
      [
        new Ingredient('onion', 1),
        new Ingredient('Cabbage', 2),
        new Ingredient('Carrot', 4),
      ]
    ),
    new Recipe(
      'Mutton',
      'This is rich in fibre',
      'https://static.toiimg.com/thumb/84667091.cms?imgsize=446034&width=800&height=800',
      [
        new Ingredient('onion', 1),
        new Ingredient('Cabbage', 2),
        new Ingredient('Carrot', 4),
      ]
    ),
  ];

  constructor(private slService: ShoppingListService) {}

  getRecipes() {
    return this.recipes.slice();
  }

  getRecipe(index: number) {
    return this.recipes[index];
  }

  addIngredientsToList(ingredients: Ingredient[]) {
    this.slService.addIngredients(ingredients);
  }

  addRecipe(recipe: Recipe) {
    this.recipes.push(recipe);
    this.recipesChanged.emit(this.recipes.slice());
  }

  updateRecipe(index: number, newRecipe: Recipe) {
    this.recipes[index] = newRecipe;
    this.recipesChanged.emit(this.recipes.slice());
  }

  deleteRecipe(index: number) {
    this.recipes.splice(index, 1);
    this.recipesChanged.emit(this.recipes.slice());
  }
}