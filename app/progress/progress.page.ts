import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TestService } from '../test.service';
import { ActivatedRoute } from '@angular/router';
import { OpenNativeSettings } from '@ionic-native/open-native-settings/ngx';
import { Platform } from '@ionic/angular';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.page.html',
  styleUrls: ['./progress.page.scss'],
})
export class ProgressPage implements OnInit {
width:any;
task:any;
data:any;
type:any;
C:any;
P:any;
  constructor(private apicall: TestService,private openNativeSettings: OpenNativeSettings,private _platform: Platform,
    private router: Router ,private route: ActivatedRoute) { }





 openSettings() {


   if (this._platform.is('cordova')) {
    this._platform.ready().then(() => {
          // open settings
          this.openNativeSettings.open("about").then(val => {
            console.log('success')
          });

        });
  } 
  else {
    console.log("oye");
  }

            
  }




  ngOnInit() {


   
 
this.type = localStorage.getItem('UserType');
if(this.type === "child" ){
  console.log(this.type);
console.log("child entered");
  this.apicall.progress().subscribe(data=>{
    console.log(data);

    this.task = data;
  this.C=true;
  this.P=false;
  console.log(this.task);


   // console.log(this.task);
    if(this.task.result < 25)
  {
    this.width = 25;
  }
  else if(this.task.result > 25 && this.task.result < 50)
{
  this.width = 50;
}
 else if(this.task.result > 50 && this.task.result < 75)
 {
  this.width = 75;
}
else if(this.task.result > 75 && this.task.result < 90)
 {
 this.width  = 88;
 }
 else{
   this.width = 100;
}
  });

}
   else
      {
    console.log("parent");
 this.route.params.subscribe(params => {
        let data = params['RecievierId'];
        this.data  = data;
         });

   console.log(this.data);
     let data1={
      reciever:this.data
    }
    this.apicall.Parentprogress(data1).subscribe(data=>{this.data=data;
  console.log(this.data);
  this.P=true;
   this.C=false;
  
    if(this.data.data.progreeRate < 25)
   {
    this.width = 25;
  }
   else if(this.data.data.progreeRate > 25 && this.data.data.progreeRate<50)
 {
   this.width = 50;
 }
 else if(this.data.data.progreeRate > 50 && this.data.data.progreeRate <75)
 {
   this.width = 75;
 }
 else if(this.data.data.progreeRate >75 && this.data.progreeRate < 90)
 {
 this.width  = 88;
 }
 else{
   this.width = 100;
 }

 });
  }

}

}