import { Component, OnInit } from '@angular/core';
import {DishService} from '../../services/dish.service';
import {Dish} from '../../models/dish.model';
import {DishTypeService} from '../../services/dish-type.service';
import {DishType} from '../../models/dishType.model';

@Component({
  selector: 'app-main-p',
  templateUrl: './main-p.component.html',
  styleUrls: ['./main-p.component.css'],
  providers: [DishService]
})
export class MainPComponent implements OnInit {

  numberOfDishes: number;
  dishes: Dish[];
  dishTypes: DishType[];

  constructor(private dishService: DishService, private dishTypeService: DishTypeService) { }

  ngOnInit() {
    this.dishService.getDishes().subscribe(data => this.numberOfDishes = data.length  );
    this.dishService.getDishes().subscribe(data => this.dishes = data );
    this.dishTypeService.getDishTypes().subscribe( data => this.dishTypes = data);
  }

}
