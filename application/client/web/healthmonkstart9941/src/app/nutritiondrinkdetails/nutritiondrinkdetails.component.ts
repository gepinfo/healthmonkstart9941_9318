import { Component, OnInit } from '@angular/core';
import { NutritiondrinkdetailsService } from './nutritiondrinkdetails.service';

@Component({
  selector: 'app-nutritiondrinkdetails',
  templateUrl: './nutritiondrinkdetails.component.html',
  styleUrls: ['./nutritiondrinkdetails.component.scss'],
})

export class NutritiondrinkdetailsComponent implements OnInit {
    public nutritiondetails = {
        created_date: '',
        created_by: '',
        last_modified_by: '',
        last_modified_date: '',
        nutritionkcal: '',
    }

    constructor (
        private nutritiondrinkdetailsService: NutritiondrinkdetailsService,
    ) { }

    ngOnInit() {
        this.nutritiondetails.created_by = sessionStorage.getItem('email') || ''; 
    }
}