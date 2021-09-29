import { Component, OnInit } from '@angular/core';
import{FormGroup,FormBuilder,FormControl,Validators}from '@angular/forms';
import { TestService } from '../test.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-sing-up-first',
  templateUrl: './sing-up-first.page.html',
  styleUrls: ['./sing-up-first.page.scss'],
})
export class SingUpFirstPage implements OnInit {

  showParent:any;
  showChild:any;
  signup1Form:FormGroup;
data:any;
 usertype:any; 
 parentcode:any;
 Failed:any;
 error_messages={
    'name':[
      {type:'required',message:'Name is required.'},   
    ],

    'ChildCode':[
      {type:'required',message:'Child Code is required.'},
     ],

    'password':[
      {type:'required',message:'Password is required.'},
      {type:'minlength',message:'Password length must be longer or equal than 6 characters.'},
      {type:'maxlength',message:'Password length must be lower or equal to 30 characters .'},      
      {type:'pattern',message:' Password must contain numbers,uppercase and lowercase characters.'},

    ],
  }


  constructor(public formBuilder:FormBuilder, private apicall: TestService, private route: ActivatedRoute){
    
 this.signup1Form = this.formBuilder.group({
    password:new FormControl('',Validators.compose([
      Validators.required,
      Validators.minLength(6),
      Validators.maxLength(30),
      Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])[a-zA-Z0-9]+$')
    ])),
  
    name:new FormControl('',Validators.compose([
      Validators.required,
     ])),

   ChildCode:new FormControl('',Validators.compose([
      Validators.required,
     ]))
  });
}


get name() 
  {
    return this.signup1Form.get("name");
  }

  get ChildCode() 
  {
    return this.signup1Form.get("ChildCode");
  }

get password() 
  {
    return this.signup1Form.get("password");
  }


 getUsertype(e){
 console.log(e,e.target.value ,"usertypefunction");
 this.usertype =  e.target.value;
 }

  signup(){
   let name1 = this.signup1Form.get("name").value;
      let password1 = this.signup1Form.get("password").value;
      let ChildCode1 = this.signup1Form.get("ChildCode").value;
  console.log(name1,"namemeem");
    console.log(password1,"123456");
     console.log(ChildCode1, "000000");

 let data={
    name:name1,
        password:password1,
        ChildCode:ChildCode1,
  }


if(this.usertype === "Parent")
{
  this.showParent=true;
  this.showChild=false;
  this.Failed=false;
    console.log(data);
   this.apicall.createpuser(data).subscribe(data=>{
 console.log(data);
 });
}

 else if (this.usertype === "childern")
 {
   this.showParent=false;
  this.showChild=true;
   this.Failed=false;
  console.log(data);

   this.apicall.createcuser(data).subscribe(data=>{
 console.log(data);
 });  
}



else{
this.Failed=true;
this.showParent=false;
  this.showChild=false;
}
}

code()
{
  this.parentcode=true;
}

pcode(){
  this.parentcode=false;
}

  ngOnInit() {
   
   this.parentcode=false;
  
  }

}