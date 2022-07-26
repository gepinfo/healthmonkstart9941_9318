import { Component, OnInit } from '@angular/core';
import { FrequentlytrackedworkoutsService } from './frequentlytrackedworkouts.service';

@Component({
  selector: 'app-frequentlytrackedworkouts',
  templateUrl: './frequentlytrackedworkouts.component.html',
  styleUrls: ['./frequentlytrackedworkouts.component.scss'],
})

export class FrequentlytrackedworkoutsComponent implements OnInit {
    public workoutdetails = {
        created_date: '',
        created_by: '',
        last_modified_by: '',
        last_modified_date: '',
        worktags: '',
    }

    constructor (
        private frequentlytrackedworkoutsService: FrequentlytrackedworkoutsService,
    ) { }

    ngOnInit() {
        this.workoutdetails.created_by = sessionStorage.getItem('email') || ''; 
    }
}