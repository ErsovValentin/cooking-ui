import { Component, OnInit } from '@angular/core';
import {DishService} from '../../services/dish.service';
import {Dish} from '../../models/dish.model';

@Component({
  selector: 'app-dish-list',
  templateUrl: './dish-list.component.html',
  styleUrls: ['./dish-list.component.css']
})
export class DishListComponent implements OnInit {

  dishesList: Dish[];

  constructor(private dishService: DishService) { }

  ngOnInit() {
    this.dishService.getDishes().subscribe(data => this.dishesList = data );
  }

}
