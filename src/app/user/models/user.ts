export class User {
  Name: string;
  UserId: string;
  Password: string;
  EmailId: string;
  Mobile: string;
  Address: string;
  Addresstype: AddressType;
  Usertype: UserType;
  Roletype: RoleType;
  Status: UserStatus
  Trait: UserTrait;
}

export enum AddressType {
  Home,
  Work,
  Others
}

export enum RoleType {
  Admin,
  Registered,
  Guest
}

export enum UserStatus {
  Enabled,
  Disabled
}

export enum UserType {
}

export enum UserTrait {
}
