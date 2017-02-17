import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  journey:string;
  step:string;
  secondPart:string = 'Datalayer';
  pageHeading:string = 'Oneclick-Demo';
  breadCrumb:string;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
  ) { }

  ngOnInit() {
        this.route.params.subscribe(
      params => {
        this.step = params['step'];
        this.journey = params['journey'];
        this.breadCrumb= this.journey + ':' + this.step; 
      });
  }

}
