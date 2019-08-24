import { genId } from '../utils/utils';
export class User {
  static user: User;
  private userList: Array<any> = [];
  insertUser(userBody: any) {
    const temp = userBody;
    temp.id = genId(6);
    this.userList.push(temp);
    return userBody;
  }
  getUser(emailId: string, password: string) {
    let temp = null;
    for (const user of this.userList) {
      if (user.email === emailId && user.password === password) {
        temp = user;
        break;
      }
    }
    return temp;
  }
}
