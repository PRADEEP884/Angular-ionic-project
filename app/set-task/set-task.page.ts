import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TestService } from '../test.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-set-task',
  templateUrl: './set-task.page.html',
  styleUrls: ['./set-task.page.scss'],
})
export class SetTaskPage implements OnInit {


task:any; 

  constructor(private router: Router,private apicall: TestService,private route: ActivatedRoute ) { 
  	this.task={
 description:"",
  		time:"",
  		taskTime:"",
      screenTime:"",
      
  	};
  }




confirm(){
	console.log(this.task.description);
	console.log(this.task.time);
	console.log(this.task.taskTime);
  console.log(this.task.screenTime);
   console.log(this.task.reciever);
this.router.navigate(['/view-task', this.task ]);
    console.log(this.task);

   this.apicall.createtask(this.task).subscribe(data=>{this.task=data;
console.log(this.task);});

}

 ngOnInit(){
  this.route.params.subscribe(params => {
        let task = params['RecievierId'];
        this.task.reciever  = task;
         });
  }
}