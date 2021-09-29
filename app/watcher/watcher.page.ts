import { Component, OnInit } from '@angular/core';
import { TestService } from '../test.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-watcher',
  templateUrl: './watcher.page.html',
  styleUrls: ['./watcher.page.scss'],
})
export class WatcherPage implements OnInit {
list:any;
result:any=[{ name:'No Child'}];
filterTerm: string;
 data:any;
// task:any;


  constructor(private apicall: TestService, private route: ActivatedRoute,private router: Router) { }



  ngOnInit() {

  	this.apicall.userType().subscribe(data=>{
console.log(data);

  		this.list=data;
  		this.result = this.list.data;
 console.log(this.result);
});
    
    this.route.params.subscribe(params => {
        this.data = params[this.data];
        
         });

  	console.log("hello");
  }



getchildrenId(data){
  
  this.router.navigate(['/set-task', { 'RecievierId': data }]);
console.log(data);//save varaibale uske navigate page krne k time p pass krna id creat task page p .

}


}
