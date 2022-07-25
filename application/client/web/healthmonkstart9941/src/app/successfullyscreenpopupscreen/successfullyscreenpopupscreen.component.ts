import { Component, OnInit } from '@angular/core';
import { SuccessfullyscreenpopupscreenService } from './successfullyscreenpopupscreen.service';

@Component({
  selector: 'app-successfullyscreenpopupscreen',
  templateUrl: './successfullyscreenpopupscreen.component.html',
  styleUrls: ['./successfullyscreenpopupscreen.component.scss'],
})

export class SuccessfullyscreenpopupscreenComponent implements OnInit {
    public nutritiondetails = {
        created_date: '',
        created_by: '',
        last_modified_by: '',
        last_modified_date: '',
        nutritionkcal: '',
    }

    constructor (
        private successfullyscreenpopupscreenService: SuccessfullyscreenpopupscreenService,
    ) { }

    ngOnInit() {
        this.nutritiondetails.created_by = sessionStorage.getItem('email') || ''; 
    }
}