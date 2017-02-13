import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { OneclickService } from '../service/oneclickservice.service'

@Component({
  selector: 'app-oneclickpattern',
  templateUrl: './oneclickpattern.component.html',
  styleUrls: ['./oneclickpattern.component.css']
})
export class OneclickpatternComponent implements OnInit {

  step: string;
  contextUrl: string = "https://banking.westpac.com.au/cao/#/";

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private _dataLayerService: OneclickService
  ) { }

  ngOnInit() {
    this.route.params.subscribe(
      params => {
        this.step = params['step'];
        console.info(this.step);
        this.getDataLayer(this.step, this.contextUrl);
      });

  }

   getDataLayer(step, url) {
    console.info(JSON.stringify(this._dataLayerService.createDataLayer(step, url),null, 4));
  }
}