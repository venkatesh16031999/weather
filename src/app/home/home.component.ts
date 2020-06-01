import { Component, OnInit } from "@angular/core";
import { PostService } from "../weather.service";
import { TranslateService } from "@ngx-translate/core";




@Component({
    selector: "Home",
    templateUrl: "./home.component.html",
    styleUrls:["./home.css"]
})
export class HomeComponent implements OnInit {

    cityname="";


    constructor( public postservice : PostService,private translate: TranslateService ) {
        translate.setDefaultLang('en');

    }

    panelDatas=[]

    async search(index){

        if(this.cityname.length!=0){

            await this.postservice.getReport(this.cityname,index);
            await this.postservice.getPostObserver().subscribe((data)=>{
                this.panelDatas.concat(data);
                this.cityname="";
            })

        }else{
            this.panelDatas[index].error="Enter The City Name";
        }
    }

    editPanelOpen(index){

        this.panelDatas[index].edit=!this.panelDatas[index].edit
        this.panelDatas[index].error="";

    }

    ngOnInit(): void {
        this.panelDatas=this.postservice.onStart();
    }
}

