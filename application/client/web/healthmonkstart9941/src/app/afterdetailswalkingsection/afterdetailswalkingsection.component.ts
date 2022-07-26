import { Component, OnInit } from '@angular/core';
import { AfterdetailswalkingsectionService } from './afterdetailswalkingsection.service';

@Component({
  selector: 'app-afterdetailswalkingsection',
  templateUrl: './afterdetailswalkingsection.component.html',
  styleUrls: ['./afterdetailswalkingsection.component.scss'],
})

export class AfterdetailswalkingsectionComponent implements OnInit {
    public workoutdetails = {
        created_date: '',
        created_by: '',
        last_modified_by: '',
        last_modified_date: '',
        worktags: '',
    }

    constructor (
        private afterdetailswalkingsectionService: AfterdetailswalkingsectionService,
    ) { }

    ngOnInit() {
        this.workoutdetails.created_by = sessionStorage.getItem('email') || ''; 
    }
}