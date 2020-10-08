/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
import { Component, OnInit } from '@angular/core';
import { AnalyticsService } from './@core/utils/analytics.service';
import {NbIconLibraries} from '@nebular/theme';

@Component({
  selector: 'ngx-app',
  template: '<router-outlet></router-outlet>',
})
export class AppComponent implements OnInit {

  constructor(private analytics: AnalyticsService, private iconLibraries: NbIconLibraries) {
    this.iconLibraries.registerFontPack('font-awesome',
      {
        iconClassPrefix: 'fa',
        packClass: 'fa',
      });
    // this.iconLibraries.registerFontPack('regular',
    //   {
    //     iconClassPrefix: 'fa',
    //     packClass: 'far',
    //   });
    // this.iconLibraries.registerFontPack('solid',
    //   {
    //     iconClassPrefix: 'fa',
    //     packClass: 'fas',
    //   });
  }

  ngOnInit() {
    this.analytics.trackPageViews();
  }
}
