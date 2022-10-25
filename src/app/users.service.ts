import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {map, Observable} from "rxjs";

export class Address{
  street: String = '';
  suite: String = '';
  city: String = '';
  zipcode: String = '';
}

export class Company{
  name : String = '';
  catchPhrase: String = '';
  bs: String = '';
}

export class MyUser{
  id : number = 0;
  name: String = '';
  username: String = '';
  email: String = '';
  phone: String = '';
  website: String = '';
  address : Address = new Address();
  company : Company = new Company();
}

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  users: MyUser[] = [];

  constructor(public httpClient: HttpClient) { }

  fetchTasks() : Observable<MyUser[]> {
    return this.httpClient
      .get<MyUser[]>('https://jsonplaceholder.typicode.com/users?_limit=25')
      .pipe(map(users => this.users = users));
  }

    removeTask(userId: number) : void{
      this.users = this.users.filter(u=>u.id !== userId);
    }

    addTask(user: MyUser) : void {
      this.users.push(user);
    }
}
