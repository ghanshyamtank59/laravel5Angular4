import { Component, OnInit } from '@angular/core';

import { DashboardService } from './../providers/dashboard.service';

@Component({
	selector: 'app-dashboard',
	templateUrl: './dashboard.component.html',
	styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

	userList: any = [];

	constructor(private _dashboardService: DashboardService) { }

	ngOnInit() {
		this._dashboardService.listOfAllUsers().then((res: any) => {
			if (res.success) {
				this.userList = res.data;		
			} else {
				console.log("There is some problem");
			}
	    });
	}

}
