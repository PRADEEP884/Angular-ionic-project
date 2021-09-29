import { Component, OnInit } from '@angular/core';
 import { TestService } from '../test.service';
@Component({
  selector: 'app-task',
  templateUrl: './task.page.html',
  styleUrls: ['./task.page.scss'],
})
export class TaskPage implements OnInit {

// show:any;
// hide:any;
// result:any=[{}];
//  data:any;

task:any;
result:any;
  constructor(private apicall: TestService) { }

  // option(){
  // 	this.show=true;
  // 	this.hide=false
  // }

  ngOnInit() {
  	// this.show=false;
    this.apicall.parentCode().subscribe(data=>{

      this.task=data;
      this.result=this.task.data;
console.log(this.result);
});
  	// this.hide=true;
  }

}
