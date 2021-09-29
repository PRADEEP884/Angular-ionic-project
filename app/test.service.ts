import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TestService {
 // apiurl = "http://localhost:3001/api/v1"
  apiurl= "http://3.135.117.5:3001"
  constructor(private http:HttpClient) { }



   createpuser(data)
   {
	console.log(data);
 return this.http.post(`${this.apiurl}/create-parent/`,data);
}



   createcuser(data)
{
	console.log(data);
 return this.http.post(`${this.apiurl}/create-child/`,data);
}


   loguser(data)
{
console.log(data);
 return this.http.post(`${this.apiurl}/login-user/`,data);
}


createtask(data)
{
	console.log(data);
 return this.http.post(`${this.apiurl}/create-task/`,data,{headers: new HttpHeaders({
     
     'Authorization':localStorage.getItem('userId')
       })});
}


viewtask(data)
{
  console.log(data);
 return this.http.post(`${this.apiurl}/view-task/`,data,{headers: new HttpHeaders({
     
     'Authorization':localStorage.getItem('userId')
       })});
}



enablestask(data)
{
  console.log(data);
 return this.http.post(`${this.apiurl}/enable-task/`,data,{headers: new HttpHeaders({
     
     'Authorization':localStorage.getItem('userId')
       })});
}


progress()
{

 return this.http.get(`${this.apiurl}/task-progress/`,{headers: new HttpHeaders({
     
     'Authorization':localStorage.getItem('userId')
       })});
}




Parentprogress(data)
{
  console.log(data);
 return this.http.post(`${this.apiurl}/ViewParent-task-progress/`,data,{headers: new HttpHeaders({
     
     'Authorization':localStorage.getItem('userId')
       })});
}


Childviewtask()
{
  console.log();
 return this.http.get(`${this.apiurl}/view-child-task`,{headers: new HttpHeaders({
     
     'Authorization':localStorage.getItem('userId')
       })});
}


     donetask(data)
 {
   console.log(data);
  return this.http.post(`${this.apiurl}/task-done/`,data,{headers: new HttpHeaders({
     
      'Authorization':localStorage.getItem('userId')
        })});
 }
    




     parentCode()
 {
   console.log();
  return this.http.get(`${this.apiurl}/Parent-profile/`,{headers: new HttpHeaders({
     
      'Authorization':localStorage.getItem('userId')
        })});
 }
    

//   viewtask()
// {
//   console.log();
//   return this.http.get(this.apiurl+"/view-child-task",{headers: new HttpHeaders({
     
//      'Authorization':localStorage.getItem('userId')
//        })});
// }




   userType()
 {
 	  console.log(localStorage.getItem('userId'));
 	console.log("bye");
 	 return this.http.get(this.apiurl+"/all-users",{headers: new HttpHeaders({
     
     'Authorization':localStorage.getItem('userId')
       })});

 	}

}

