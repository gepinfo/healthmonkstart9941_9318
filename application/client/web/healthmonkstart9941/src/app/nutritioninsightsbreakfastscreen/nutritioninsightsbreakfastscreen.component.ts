import { Component, OnInit } from '@angular/core';
import { NutritioninsightsbreakfastscreenService } from './nutritioninsightsbreakfastscreen.service';

@Component({
  selector: 'app-nutritioninsightsbreakfastscreen',
  templateUrl: './nutritioninsightsbreakfastscreen.component.html',
  styleUrls: ['./nutritioninsightsbreakfastscreen.component.scss'],
})

export class NutritioninsightsbreakfastscreenComponent implements OnInit {
    public nutritiondetails = {
        created_date: '',
        created_by: '',
        last_modified_by: '',
        last_modified_date: '',
        nutritionkcal: '',
    }

    constructor (
        private nutritioninsightsbreakfastscreenService: NutritioninsightsbreakfastscreenService,
    ) { }

    ngOnInit() {
        this.nutritiondetails.created_by = sessionStorage.getItem('email') || ''; 
    }
}