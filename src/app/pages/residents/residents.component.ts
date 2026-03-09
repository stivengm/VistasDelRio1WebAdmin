import { Component, OnInit } from '@angular/core';
import { UserService } from '../../core/services/user.service';
import { UsersResponseModel } from '../../core/models/response/users-response.model';


@Component({
  selector: 'app-residents',
  imports: [],
  templateUrl: './residents.component.html',
  styleUrl: './residents.component.scss'
})
export class ResidentsComponent implements OnInit {

  allUsers: UsersResponseModel[] = [];

  constructor(
    private userService: UserService
  ) {}

  ngOnInit() {
    this.userService.getAllUsers().subscribe((resp) => {
      
      const users = resp.data;

      this.allUsers = users.flatMap((user: any) => {
        if (!user.apartaments && !user.apartments) {
          return [user];
        }

        const apartments = user.apartaments || user.apartments;

        return apartments.map((apt: any) => ({
          ...user,
          torre: apt.torre,
          apartamento: apt.apartamento
        }));
      });
    });
  }
}
