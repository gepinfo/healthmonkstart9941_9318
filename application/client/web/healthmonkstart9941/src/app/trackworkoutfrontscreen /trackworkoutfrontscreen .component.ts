import { Component, OnInit } from '@angular/core';
import { Trackworkoutfrontscreen Service } from './trackworkoutfrontscreen .service';

@Component({
  selector: 'app-trackworkoutfrontscreen ',
  templateUrl: './trackworkoutfrontscreen .component.html',
  styleUrls: ['./trackworkoutfrontscreen .component.scss'],
})

export class Trackworkoutfrontscreen Component implements OnInit {
    public workoutdetails = {
        created_date: '',
        created_by: '',
        last_modified_by: '',
        last_modified_date: '',
        worktags: '',
    }

    constructor (
        private trackworkoutfrontscreen Service: Trackworkoutfrontscreen Service,
    ) { }

    ngOnInit() {
        this.workoutdetails.created_by = sessionStorage.getItem('email') || ''; 
    }
}