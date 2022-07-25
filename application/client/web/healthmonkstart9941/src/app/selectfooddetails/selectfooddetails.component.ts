import { Component, OnInit } from '@angular/core';
import { SelectfooddetailsService } from './selectfooddetails.service';

@Component({
  selector: 'app-selectfooddetails',
  templateUrl: './selectfooddetails.component.html',
  styleUrls: ['./selectfooddetails.component.scss'],
})

export class SelectfooddetailsComponent implements OnInit {
    public nutritiondetails = {
        created_date: '',
        created_by: '',
        last_modified_by: '',
        last_modified_date: '',
        nutritionkcal: '',
    }

    constructor (
        private selectfooddetailsService: SelectfooddetailsService,
    ) { }

    ngOnInit() {
        this.nutritiondetails.created_by = sessionStorage.getItem('email') || ''; 
    }
}