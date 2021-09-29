import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { TestService } from '../test.service';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-view-children',
  templateUrl: './view-children.page.html',
  styleUrls: ['./view-children.page.scss'],
})
export class ViewChildrenPage implements OnInit {
 task:any;
   totaltask:any=[{}];
   isTaskAvailiable:any;
data:any;
progress=false;
iSdone=false;
Taskid:any;
type:any;
parentenable:any;
id:any;
combinedArray:any=[{}];
  
constructor(private route: ActivatedRoute,public router: Router,private apicall: TestService,public alertController: AlertController) { }

taskRate(taskid)
{ console.log(taskid,"iddd");
this.Taskid = taskid;
    let data={
      taskid:taskid._id
    }
    console.log(data);
    
   this.apicall.enablestask(data).subscribe(data=>{this.task=data;
  console.log(this.task);
  if(this.task.success === true){
  this.progress = true;
  this.getallTask();
}
  });
   
}


SingleRate(id){
console.log(id);
 this.router.navigate(['/progress', { 'RecievierId': id }]);
}

async presentAlert(taskid) {
  console.log(taskid,"iddd");
    let data={
      taskid:taskid._id
    }
    this.Taskid = taskid;
    console.log(data);
  this.apicall.donetask(data).subscribe(data=>{this.task=data;
  console.log(this.task);
if(this.task.success === true){
   this.getallTask();
}
});

    const alert = await this.alertController.create({
      cssClass: 'my-cusom-class',
      message: 'Your Task is done',
      buttons: ['OK']
    });
    await alert.present();
  }


  getallTask(){
    this.type = localStorage.getItem('UserType');
this.type == "parent"?this.parentenable =true:this.parentenable=false;
console.log(this.type,this.parentenable);
    if(this.type==="child"){
     
    this.apicall.Childviewtask().subscribe(data=>{
  this.data = data;
  this.totaltask=this.data.data;
  console.log(this.data);
  this.totaltask.length > 0 ?this.isTaskAvailiable = true:this.isTaskAvailiable = false;
  console.log(this.totaltask);
  for(const d of this.totaltask) {
    d.screenTime = d.screenTime.split('.')[0];
    d.taskTime = d.taskTime.split('.')[0];
     d.time = d.time.split('.')[0];
   }
console.log(this.isTaskAvailiable , this.totaltask.length);
});
}

 else{
    this.apicall.viewtask(this.data).subscribe(data=>{
  this.data = data;
  this.totaltask=this.data.data;
   this.totaltask.forEach((task,index) => {
    this.combinedArray.push({tasklist:task,child:this.data.childinfo[index]});
   })
  console.log( this.combinedArray);
  this.totaltask.length > 0 ?this.isTaskAvailiable = true:this.isTaskAvailiable = false;
  console.log(this.data);
  console.log(this.totaltask);
  for(const d of this.totaltask) {
    d.screenTime = d.screenTime.split('.')[0];
    d.taskTime = d.taskTime.split('.')[0];
     d.time = d.time.split('.')[0];
   }
console.log(this.isTaskAvailiable , this.totaltask.length);
});
   }
 }
  
  ngOnInit() {
    this.getallTask();	
  }

}