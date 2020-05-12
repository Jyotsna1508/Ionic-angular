import { Injectable } from '@angular/core';
import { Recipe } from '../recipes.model';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RecipesService {
  private recipes: Recipe[] = [
    {
      id: '1',
      title: 'Chicken Tikka',
      imageUrl: 'https://media-cdn.tripadvisor.com/media/photo-s/0f/a8/f2/cb/tandoori-chicken-tikka.jpg',
      ingredients: ['chicken', 'turmeric', 'lemon', 'salad']
    },
    {
      id: '2',
      title: 'Panner Labbadar',
      imageUrl: 'https://i2.wp.com/www.vegrecipesofindia.com/wp-content/uploads/2018/09/paneer-lababdar-recipe-1.jpg',
      ingredients: ['Paneer', 'capsicum', 'species', 'salad']
    },
    {
      id: '3',
      title: 'Pasta',
      imageUrl: 'https://www.carveyourcraving.com/wp-content/uploads/2019/05/Vegan-Pasta-primavera-with-roasted-vegetables-500x500.jpg',
      ingredients: ['Pasta', 'capsicum', 'tomatoes', 'species']
    }
  ];
  recipe: BehaviorSubject<Recipe[]>;

  constructor() {
    this.recipe = new BehaviorSubject(this.recipes);
  }

  getAllRecipes() {
    this.recipe.next(this.recipes);
  }

  getAllRecipeId(recipeId: string) {
    return {...this.recipes.find(recipe => {
      return recipe.id === recipeId; })
    };
  }

  deleteRecipeById(recipeId: string) {
    this.recipes = this.recipes.filter(recipe => {
      return recipe.id !== recipeId;
    });
    this.recipe.next(this.recipes);
  }
}
