import { Injectable } from '@angular/core';
import { setInterval, clearInterval } from "tns-core-modules/timer";
import { Subject, interval } from 'rxjs';

import { HttpClient } from '@angular/common/http';

@Injectable({providedIn:'root'})
export class PostService{
    private weatherData=[
        {data:"City Not Entered",edit:false,interval:"",date:new Date().toTimeString().split(" ")[0],error:""},
        {data:"City Not Entered",edit:false,interval:"",date:new Date().toTimeString().split(" ")[0],error:""},
        {data:"City Not Entered",edit:false,interval:"",date:new Date().toTimeString().split(" ")[0],error:""},
        {data:"City Not Entered",edit:false,interval:"",date:new Date().toTimeString().split(" ")[0],error:""}
    ];
    private updatedPost= new Subject();


    constructor( private http:HttpClient ){}

     getReport(cityname,index){

            const link=`http://api.openweathermap.org/data/2.5/weather?q=${cityname}&appid=9b41d6fd6bf6b93bac3fffbc3dd2768b`;
            this.http.get(link).subscribe((resData)=>{

                let intervalend:any=this.weatherData[index].interval;

                clearInterval(intervalend);

                let intervalStart:any=setInterval(()=>{
                    
                    this.http.get(link).subscribe((resData)=>{
                        let data : any = resData
                        this.weatherData[index].data=data;
                        this.weatherData[index].date=new Date().toTimeString().split(" ")[0];
                    })

                },30000);

                let data : any = resData
                
                this.weatherData[index]={
                    data :data,
                    edit:true,
                    interval:intervalStart,
                    date:new Date().toTimeString().split(" ")[0],
                    error:""
                }

            this.updatedPost.next([...this.weatherData]);
       },
       (err)=>{
           if(err.status==404){
                this.weatherData[index].error="City Not Found"
                this.updatedPost.next([...this.weatherData]);
           }
       })
    }

    getPostObserver(){
        return this.updatedPost.asObservable();
    }

    onStart(){
        return this.weatherData;
    }

}