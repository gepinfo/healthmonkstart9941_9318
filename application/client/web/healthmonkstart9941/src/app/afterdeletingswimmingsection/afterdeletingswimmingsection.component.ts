import { Component, OnInit } from '@angular/core';
import { AfterdeletingswimmingsectionService } from './afterdeletingswimmingsection.service';

@Component({
  selector: 'app-afterdeletingswimmingsection',
  templateUrl: './afterdeletingswimmingsection.component.html',
  styleUrls: ['./afterdeletingswimmingsection.component.scss'],
})

export class AfterdeletingswimmingsectionComponent implements OnInit {
    public workoutdetails = {
        created_date: '',
        created_by: '',
        last_modified_by: '',
        last_modified_date: '',
        worktags: '',
    }

    constructor (
        private afterdeletingswimmingsectionService: AfterdeletingswimmingsectionService,
    ) { }

    ngOnInit() {
        this.workoutdetails.created_by = sessionStorage.getItem('email') || ''; 
    }
}