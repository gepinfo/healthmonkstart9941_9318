import { Component, OnInit } from '@angular/core';
import { ViewallmealService } from './viewallmeal.service';

@Component({
  selector: 'app-viewallmeal',
  templateUrl: './viewallmeal.component.html',
  styleUrls: ['./viewallmeal.component.scss'],
})

export class ViewallmealComponent implements OnInit {
    public nutritiondetails = {
        created_date: '',
        created_by: '',
        last_modified_by: '',
        last_modified_date: '',
        nutritionkcal: '',
    }

    constructor (
        private viewallmealService: ViewallmealService,
    ) { }

    ngOnInit() {
        this.nutritiondetails.created_by = sessionStorage.getItem('email') || ''; 
    }
}