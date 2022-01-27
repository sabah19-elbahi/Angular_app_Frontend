export class User {
    id : number;
    role_id : number;
    name : string;
    email : string;
    password : string;
  constructor(
    id : number,
    role_id : number,
    name : string,
    email : string,
    password : string)
  {
    this.id=id;
    this.role_id=role_id;
    this.name=name;
    this.email=email;
    this.password=password;
  }
}