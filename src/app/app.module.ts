import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { NativeScriptHttpClientModule } from 'nativescript-angular/http-client';

import { NativeScriptFormsModule } from "nativescript-angular/forms";


import {HttpClientModule, HttpClient} from '@angular/common/http';
import {TranslateModule, TranslateLoader} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
// import { NativeScriptLoader } from '@danvick/ngx-translate-nativescript-loader';


// import { Http } from "@angular/http";
// import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
// import { TranslateHttpLoader } from '@ngx-translate/http-loader';

export function createTranslateLoader(http: HttpClient) {
    return new TranslateHttpLoader(http, '/assets/i18n/', '.json');
  }

@NgModule({
    bootstrap: [
        AppComponent
    ],
    imports: [
        NativeScriptModule,
        AppRoutingModule,
        NativeScriptFormsModule,
        NativeScriptHttpClientModule,


        TranslateModule.forRoot({
            defaultLanguage:"en",
            loader: {
      
              provide: TranslateLoader,
      
              useFactory: createTranslateLoader,
      
              deps: [HttpClient]
      
            }
      
          }),


    ],
    declarations: [
        AppComponent
    ],

    exports:[TranslateModule],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class AppModule {

    


 }
