export class User {
  id: number;
  name: string;
  lastName: string;

  public constructor(id: number, name: string, lastName: string) {
    this.name = name;
    this.lastName = lastName;
  }
}
