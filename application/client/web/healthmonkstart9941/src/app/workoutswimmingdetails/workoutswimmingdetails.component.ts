import { Component, OnInit } from '@angular/core';
import { WorkoutswimmingdetailsService } from './workoutswimmingdetails.service';

@Component({
  selector: 'app-workoutswimmingdetails',
  templateUrl: './workoutswimmingdetails.component.html',
  styleUrls: ['./workoutswimmingdetails.component.scss'],
})

export class WorkoutswimmingdetailsComponent implements OnInit {
    public workoutdetails = {
        created_date: '',
        created_by: '',
        last_modified_by: '',
        last_modified_date: '',
        worktags: '',
    }

    constructor (
        private workoutswimmingdetailsService: WorkoutswimmingdetailsService,
    ) { }

    ngOnInit() {
        this.workoutdetails.created_by = sessionStorage.getItem('email') || ''; 
    }
}