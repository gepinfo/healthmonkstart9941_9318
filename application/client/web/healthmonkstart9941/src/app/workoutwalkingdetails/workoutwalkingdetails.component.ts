import { Component, OnInit } from '@angular/core';
import { WorkoutwalkingdetailsService } from './workoutwalkingdetails.service';

@Component({
  selector: 'app-workoutwalkingdetails',
  templateUrl: './workoutwalkingdetails.component.html',
  styleUrls: ['./workoutwalkingdetails.component.scss'],
})

export class WorkoutwalkingdetailsComponent implements OnInit {
    public workoutdetails = {
        created_date: '',
        created_by: '',
        last_modified_by: '',
        last_modified_date: '',
        worktags: '',
    }

    constructor (
        private workoutwalkingdetailsService: WorkoutwalkingdetailsService,
    ) { }

    ngOnInit() {
        this.workoutdetails.created_by = sessionStorage.getItem('email') || ''; 
    }
}