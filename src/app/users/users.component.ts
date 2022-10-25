import { Component, OnInit } from '@angular/core';
import {MyUser, UsersService} from "../users.service";
@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  loading: boolean = true;
  constructor(public usersService : UsersService) {

  }

  ngOnInit(): void {
    this.usersService.fetchTasks()
     // .pipe(delay(2000))
      .subscribe(()=>{this.loading = false;});

  }

  delUser(userId: number): void{
      this.usersService.removeTask(userId);
  }

}
