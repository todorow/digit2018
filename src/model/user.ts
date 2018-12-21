export class User {
  id: number;
  name: string;
  lastName: string;
  email: string;
  password: string;
  typeUser: number;
  image: string;
  isVisible: boolean;

  public constructor(id?: number, name?: string, lastName?: string, email?: string, password?: string,  typeUser?: number,image?:string, isVisible?:boolean) {
    this.name = name;
    this.lastName = lastName;
    this.email = email;
    this.password = password;
    this.typeUser = typeUser;
    this.isVisible = isVisible;


  }
}
