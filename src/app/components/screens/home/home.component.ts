import { Component, OnInit } from '@angular/core';
import { IFood } from 'src/app/services/food/food.interface';
import { FoodService } from 'src/app/services/food/food.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit{
  foods: IFood[] = []

  constructor(private foodService: FoodService) { }

  ngOnInit() {
    this.foodService.getAll().subscribe(data => {
      this.foods = data
    })
  }
}
