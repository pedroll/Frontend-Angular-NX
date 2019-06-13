export class User {
  constructor(
    public name: string,
    public surname: string,
    public email: string,
    public password: string,
    public id?: number,
    public role: string = 'ROLE_USER',
    public description?: string,
    public image?: string

  ) {
  }
}
