import { Component, OnInit } from '@angular/core';
import { Recipe } from './recipes.model';
import { RecipesService } from './recipes/recipes.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.page.html',
  styleUrls: ['./recipes.page.scss'],
  providers: [RecipesService]
})
export class RecipesPage implements OnInit {
  recipes: Recipe[];
  constructor(
    private recipesService: RecipesService
  ) {
    this.recipesService.recipe.subscribe(c => {
      this.recipes = c;
    });
   }

  ngOnInit() {
    this.recipesService.recipe.subscribe(c => {
      this.recipes = c;
  });
  }
}
