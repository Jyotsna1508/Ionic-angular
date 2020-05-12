import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RecipesService } from '../recipes/recipes.service';
import { Recipe } from '../recipes.model';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.page.html',
  styleUrls: ['./recipe-details.page.scss'],
})
export class RecipeDetailsPage implements OnInit {
  recipeDetail: Recipe;
  constructor(
    private activatedroute: ActivatedRoute,
    private recipesService: RecipesService,
    private router: Router,
    private altCtrl: AlertController
  ) { }

  ngOnInit() {
    this.activatedroute.paramMap.subscribe(paramMap => {
      if (!paramMap.has('recipeId')) {
        return;
      }
      const recipeId = paramMap.get('recipeId');
      this.recipeDetail = this.recipesService.getAllRecipeId(recipeId);
    });
  }
  deleteRecipe() {
    this.altCtrl.create({
      message: 'Are you sure you want to delete?',
      buttons: [{
        text: 'Cancel',
        role: 'cancel'
      },
      {
        text: 'Delete',
        handler: () => {
          this.recipesService.deleteRecipeById(this.recipeDetail.id);
          this.router.navigate(['/recipes']);
        }
      }]
    }).then(alrtEle => {
      alrtEle.present();
    });
  }

}
