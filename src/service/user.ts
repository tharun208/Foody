export class UserService {
  constructor(private user: any) {}
  registerUser(userBody: any) {
    const user = this.user.insertUser(userBody);
    return user;
  }
  findUser(emailId: string, password: string) {
    const findUser = this.user.getUser(emailId, password);
    return findUser ? findUser : null;
  }
}
