import { Component } from "@angular/core";

import { TranslateService } from "@ngx-translate/core";
import * as Platform  from "tns-core-modules/platform"

@Component({
    selector: "ns-app",
     templateUrl: "app.component.html"
    // template: `
    //     <Label text="{{ 'ONBOARDING_MODULE.PERSONAL_INFO.SAVE' | translate }}"></Label>
    // `
})
export class AppComponent {

    

    constructor(public translate: TranslateService) {

        console.log(translate.getDefaultLang());

        // const language = Platform.device.language.split('-')[0];
        // translate.setDefaultLang('en');
        //     // translate.use(language);
        // // translate.addLangs(['en']);
        // // this.translate.setDefaultLang("en");
   
      }

 }
