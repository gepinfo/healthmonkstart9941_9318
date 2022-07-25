import { Component, OnInit } from '@angular/core';
import { NutritioninsightsmorningsnackscreenService } from './nutritioninsightsmorningsnackscreen.service';

@Component({
  selector: 'app-nutritioninsightsmorningsnackscreen',
  templateUrl: './nutritioninsightsmorningsnackscreen.component.html',
  styleUrls: ['./nutritioninsightsmorningsnackscreen.component.scss'],
})

export class NutritioninsightsmorningsnackscreenComponent implements OnInit {
    public nutritiondetails = {
        created_date: '',
        created_by: '',
        last_modified_by: '',
        last_modified_date: '',
        nutritionkcal: '',
    }

    constructor (
        private nutritioninsightsmorningsnackscreenService: NutritioninsightsmorningsnackscreenService,
    ) { }

    ngOnInit() {
        this.nutritiondetails.created_by = sessionStorage.getItem('email') || ''; 
    }
}