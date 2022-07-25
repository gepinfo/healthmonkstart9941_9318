import { Component, OnInit } from '@angular/core';
import { EditeddetailspopupscreenService } from './editeddetailspopupscreen.service';

@Component({
  selector: 'app-editeddetailspopupscreen',
  templateUrl: './editeddetailspopupscreen.component.html',
  styleUrls: ['./editeddetailspopupscreen.component.scss'],
})

export class EditeddetailspopupscreenComponent implements OnInit {
    public nutritiondetails = {
        created_date: '',
        created_by: '',
        last_modified_by: '',
        last_modified_date: '',
        nutritionkcal: '',
    }

    constructor (
        private editeddetailspopupscreenService: EditeddetailspopupscreenService,
    ) { }

    ngOnInit() {
        this.nutritiondetails.created_by = sessionStorage.getItem('email') || ''; 
    }
}