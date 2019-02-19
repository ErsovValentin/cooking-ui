import {Component, Input, OnInit} from '@angular/core';
import {Dish} from '../../../models/dish.model';
import {DishType} from '../../../models/dishType.model';

@Component({
  selector: 'app-dish-type-card',
  templateUrl: './dish-type-card.component.html',
  styleUrls: ['./dish-type-card.component.css']
})
export class DishTypeCardComponent implements OnInit {

  isBlured: boolean;
  @Input() dishType: DishType;

  constructor() { }

  ngOnInit() {
    this.isBlured = false;
  }

  toggleBlur(): void {
    this.isBlured = !this.isBlured;
  }

}
