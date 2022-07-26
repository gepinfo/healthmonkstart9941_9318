import { Component, OnInit } from '@angular/core';
import { WorkoutreminderpopupscreenService } from './workoutreminderpopupscreen.service';

@Component({
  selector: 'app-workoutreminderpopupscreen',
  templateUrl: './workoutreminderpopupscreen.component.html',
  styleUrls: ['./workoutreminderpopupscreen.component.scss'],
})

export class WorkoutreminderpopupscreenComponent implements OnInit {
    public workoutdetails = {
        created_date: '',
        created_by: '',
        last_modified_by: '',
        last_modified_date: '',
        worktags: '',
    }

    constructor (
        private workoutreminderpopupscreenService: WorkoutreminderpopupscreenService,
    ) { }

    ngOnInit() {
        this.workoutdetails.created_by = sessionStorage.getItem('email') || ''; 
    }
}