import { Injectable } from '@angular/core';
import { User, AddressType, RoleType, UserStatus, UserType, UserTrait } from './models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }
  getUsers() {
    return USERS;
  }
}

const USERS: User[] = [{
  Address: 'xyz',
  Addresstype: AddressType.Home,
  EmailId: 'abc@email.com',
  Mobile: '0987654321',
  Name: 'ASDF',
  Password: 'Asdf@123',
  Roletype: RoleType.Admin,
  Status: UserStatus.Active,
  Trait: UserTrait.Genuine,
  UserId: 'asdf',
  Usertype: UserType.Ordinary
},
{
  Address: '',
  Addresstype: AddressType.Home,
  EmailId: '',
  Mobile: '',
  Name: '',
  Password: '',
  Roletype: RoleType.Admin,
  Status: UserStatus.Active,
  Trait: UserTrait.Genuine,
  UserId: '',
  Usertype: UserType.Ordinary
}]