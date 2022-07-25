import { Component, OnInit } from '@angular/core';
import { NutritioninsightsalldetailsService } from './nutritioninsightsalldetails.service';

@Component({
  selector: 'app-nutritioninsightsalldetails',
  templateUrl: './nutritioninsightsalldetails.component.html',
  styleUrls: ['./nutritioninsightsalldetails.component.scss'],
})

export class NutritioninsightsalldetailsComponent implements OnInit {
    public nutritiondetails = {
        created_date: '',
        created_by: '',
        last_modified_by: '',
        last_modified_date: '',
        nutritionkcal: '',
    }

    constructor (
        private nutritioninsightsalldetailsService: NutritioninsightsalldetailsService,
    ) { }

    ngOnInit() {
        this.nutritiondetails.created_by = sessionStorage.getItem('email') || ''; 
    }
}