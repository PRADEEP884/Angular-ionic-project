import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TestService } from '../test.service';
import { ActivatedRoute } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-select',
  templateUrl: './select.page.html',
  styleUrls: ['./select.page.scss'],
})
export class SelectPage implements OnInit {
data:any;
task:any;
result:any;
public message = "Warning";
disallow:any;
type:any;
  constructor(private router: Router,private apicall: TestService,private route: ActivatedRoute,public alertController: AlertController) { }


ReferralCode(){
	if(this.result.UserType==="parent"){
	 this.router.navigate(['/task']);
	 this.disallow=false;
	}
	else
	{
		
		console.log("no");
		this.disallow=true;
	}
}

ChildrenList(){
	if(this.result.UserType==="parent"){
	 this.router.navigate(['/watcher', this.result]);
	 this.disallow=false;
	}

	else{
		this.disallow=true;
		console.log("no")
	
	}

}

  ngOnInit() {

  // this.route.params.subscribe(params => {
  //       this.data = params[this.data];
        
  //        });

  this.type = localStorage.getItem('UserType');
// if(this.type === "child"){

// }else{

// }
//     
 this.apicall.parentCode().subscribe(data=>{

      this.task=data;
      this.result=this.task.data;
console.log(this.result);
});
}

}
