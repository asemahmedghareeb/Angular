import { Component } from '@angular/core';
import {Recipe} from '../recipe.model'
@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent {
  recipes:Recipe[]=[
    new Recipe('A Test Recipe',"ths is simply test","https://th.bing.com/th/id/OIP.JZzRmjJcqrrHpM2MXLjK7AHaIT?w=157&h=180&c=7&r=0&o=5&pid=1.7"),
    new Recipe('A Test Recipe',"ths is simply test","https://th.bing.com/th/id/OIP.JZzRmjJcqrrHpM2MXLjK7AHaIT?w=157&h=180&c=7&r=0&o=5&pid=1.7"),
    new Recipe('A Test Recipe',"ths is simply test","https://th.bing.com/th/id/OIP.JZzRmjJcqrrHpM2MXLjK7AHaIT?w=157&h=180&c=7&r=0&o=5&pid=1.7"),
  ]
}
