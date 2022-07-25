import { Component, OnInit } from '@angular/core';
import { SelectedfoodviewbreakfastService } from './selectedfoodviewbreakfast.service';

@Component({
  selector: 'app-selectedfoodviewbreakfast',
  templateUrl: './selectedfoodviewbreakfast.component.html',
  styleUrls: ['./selectedfoodviewbreakfast.component.scss'],
})

export class SelectedfoodviewbreakfastComponent implements OnInit {
    public nutritiondetails = {
        created_date: '',
        created_by: '',
        last_modified_by: '',
        last_modified_date: '',
        nutritionkcal: '',
    }

    constructor (
        private selectedfoodviewbreakfastService: SelectedfoodviewbreakfastService,
    ) { }

    ngOnInit() {
        this.nutritiondetails.created_by = sessionStorage.getItem('email') || ''; 
    }
}