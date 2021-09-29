import { Component, OnInit } from '@angular/core';
import{FormGroup,FormBuilder,FormControl,Validators}from '@angular/forms';
import { TestService } from '../test.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-up-second',
  templateUrl: './sign-up-second.page.html',
  styleUrls: ['./sign-up-second.page.scss'],
})
export class SignUpSecondPage implements OnInit {
 data:any; 
 result:any;
showMsg:any;
signupForm:FormGroup;
showFailMsg:any;

 error_messages={
    'name':[
      {type:'required',message:'Name is required.'},
     

    ],
    'password':[
      {type:'required',message:'Password is required.'},
      {type:'minlength',message:'Password length must be longer or equal than 6 characters.'},
      {type:'maxlength',message:'Password length must be lower or equal to 30 characters .'},
      {type:'pattern',message:' Password must contain numbers,uppercase and lowercase characters.'},

    ],
  }

  constructor(private formBuilder: FormBuilder, private apicall: TestService, private route: ActivatedRoute,private router: Router){
    
 this.signupForm = this.formBuilder.group({
    password:new FormControl('',Validators.compose([
      Validators.required,
      Validators.minLength(6),
      Validators.maxLength(30),
      Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])[a-zA-Z0-9]+$')
    ])),
  
    name:new FormControl('',Validators.compose([
      Validators.required,
     ]))
  });
}


get name() 
  {
    return this.signupForm.get("name");
  }
get password() 
  {
    return this.signupForm.get("password");
  }


signin(){
 
  let name1 = this.signupForm.get("name").value;
      let password1 = this.signupForm.get("password").value;
  console.log(name1,"namemeem");
    console.log(password1,"123456");

 let data={
    name:name1,
   password:password1,
  }


 console.log(data);
 this.apicall.loguser(data).subscribe(data=>{
 this.result = data; 
console.log(this.result);

localStorage.setItem("userId", this.result.token);
  
if(this.result.success == false)
{
  this.showFailMsg=true;
  this.showMsg= false;
}
else
{
 this.showMsg= true;
  this.showFailMsg=false; 
  localStorage.setItem("UserType",this.result.data.UserType);
   this.router.navigate(['/select' ]);
  
}

});

}
  ngOnInit() {

   
  }

}