import { Component, OnInit } from '@angular/core';
import { UserListService } from '../../services/user-list.service';
import { Router } from '@angular/router';

import { Person } from '../../types/Person';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  // username:string;
  // password:string;
  subscription;
  loginPerson:Person = {name:'',pass:''};
  foundPerson;
  constructor(private router:Router, private user:UserListService) { }

  ngOnInit() { }

  onClick(){
    this.subscription = this.user.findUsers(this.loginPerson.name)
                .subscribe(
                  (data) => {
                    this.foundPerson = data;
                    this.authenticateUser();
                  },
                  ()=>alert("service not working...!!!")
                );

    }
                
  authenticateUser() {
    // console.log('reached Auth Function');  
    // console.log(this.foundPerson.count);  
    if (this.foundPerson.count == 1 
        && this.loginPerson.name === this.foundPerson.results[0].name 
        && this.loginPerson.pass === this.foundPerson.results[0].birth_year) {
      console.log("Match Found");
      this.router.navigate(["search"]);
    } else {
      // console.log(this.loginPerson);
      // console.log(this.user.showUsers());
      console.log("NOT Matched");

    }

      this.user.setLoggedIn(true);
  }
  
}