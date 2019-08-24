import App from '../../src/models/app';

describe('Test Suites for User', () => {
  beforeAll(() => {
    App.init();
  });
  it('it should add a user with a id', () => {
    const user = {
      email: 'rajendrantharun@live.com',
      password: 'test@123',
      phno: '996506767',
    };
    const insertedUser = App.user.insertUser(user);
    expect(insertedUser).toHaveProperty('id');
    expect(insertedUser.email).toBe(user.email);
    expect(insertedUser.password).toBe(user.password);
    expect(insertedUser.phno).toBe(user.phno);
  });
  it('it should find whether the user exists or not', () => {
    const user = {
      email: 'rajendrantharun@live.com',
      password: 'test@123',
    };
    const findUser = App.user.getUser(user.email, user.password);
    expect(findUser).not.toBe(null);
  });
});
