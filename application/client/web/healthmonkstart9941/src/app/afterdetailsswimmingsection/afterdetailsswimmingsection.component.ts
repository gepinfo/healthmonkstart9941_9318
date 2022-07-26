import { Component, OnInit } from '@angular/core';
import { AfterdetailsswimmingsectionService } from './afterdetailsswimmingsection.service';

@Component({
  selector: 'app-afterdetailsswimmingsection',
  templateUrl: './afterdetailsswimmingsection.component.html',
  styleUrls: ['./afterdetailsswimmingsection.component.scss'],
})

export class AfterdetailsswimmingsectionComponent implements OnInit {
    public workoutdetails = {
        created_date: '',
        created_by: '',
        last_modified_by: '',
        last_modified_date: '',
        worktags: '',
    }

    constructor (
        private afterdetailsswimmingsectionService: AfterdetailsswimmingsectionService,
    ) { }

    ngOnInit() {
        this.workoutdetails.created_by = sessionStorage.getItem('email') || ''; 
    }
}