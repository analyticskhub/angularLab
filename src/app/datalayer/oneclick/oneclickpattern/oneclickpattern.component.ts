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
  journey: string;
  contextUrl: string = "https://banking.westpac.com.au/cao/#/";
  stepUrl: string;
  dataLayer: any;
  nextStepRoute: string;
  previousStepRoute: string;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private _dataLayerService: OneclickService
  ) { }

  ngOnInit() {
    this.route.params.subscribe(
      params => {
        this.step = params['step'];
        this.journey = params['journey'];
        console.info(this.step);
        this.getDataLayer(this.step, this.contextUrl);
        this.userJourneySteps(this.step, this.journey);
      });

  }

  getDataLayer(step, url) {
    console.info(JSON.stringify(this._dataLayerService.createDataLayer(step, url), null, 4));
    this.dataLayer = JSON.stringify(this._dataLayerService.createDataLayer(step, url), null, 4);
    this.stepUrl = this.contextUrl + this.step;
  }
  // try this approach, this way you can name the step route differently 
  nextStep(routeparam: string) {
    this.router.navigate(['./' + routeparam]);
  }

  userJourneySteps(currentstep: string, journeytype: string) {

    let currentFlow = journeytype + ':' + currentstep;
    switch (currentFlow) {

      case 'pub:welcome':
        this.nextStepRoute = 'CustomerDetails'
        this.previousStepRoute = 'OnceclickHome'
        //TODO
        break;
      case 'pub:CustomerDetails':
        this.nextStepRoute = 'CustomerDetails'
        this.previousStepRoute = 'welcome'
        //TODO
        break;
    }
  }
}