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

    let pushTowindow;
    pushTowindow = this._dataLayerService._window();
    pushTowindow.digitalData = JSON.parse(this.dataLayer);

    if (pushTowindow.s3) {
      pushTowindow.s3.w_trackPage(JSON.parse(this.dataLayer));
    }

  }
  // try this approach, this way you can name the step route differently 
  /* or this approach 

    Import the angular router

    import { Router } from '@angular/router';
    Create a button with click event

    <div (click)="redirect(my-page)">My page</div>
    Create a method with a pagename parameter

    redirect(pagename: string) {
      this.router.navigate(['/'+pagename]);
}

  */
  nextStep(pagename: string) {
    this.router.navigate(['/' + pagename]);
  }

  previousStep(pagename: string) {
    this.router.navigate(['/datalayer/oneclick/usecase', 'pub', + pagename]);
  }
  userJourneySteps(currentstep: string, journeytype: string) {

    let currentFlow = journeytype + ':' + currentstep;
    switch (currentFlow) {

      case 'pub:welcome':
        this.nextStepRoute = 'CustomerDetails'
        this.previousStepRoute = 'UsecaseHome'
        //TODO
        break;
      case 'pub:CustomerDetails':
        this.nextStepRoute = 'IdentificationRequired'
        this.previousStepRoute = 'welcome'
        //TODO
        break;
      case 'pub:IdentificationRequired':
        this.nextStepRoute = 'Review'
        this.previousStepRoute = 'CustomerDetails'
        //TODO
        break;
      case 'pub:Review':
        this.nextStepRoute = 'Progress'
        this.previousStepRoute = 'IdentificationRequired'
        //TODO
        break;
      case 'pub:Progress':
        this.nextStepRoute = 'Thankyou'
        this.previousStepRoute = 'Review'
        //TODO
        break;
      case 'pub:Thankyou':
        this.nextStepRoute = 'welcome'
        this.previousStepRoute = 'Progress'
        //TODO
        break;
    }
  }
}