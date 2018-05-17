import { User } from './user';

describe('User', () => {
  it('should create an instance', () => {
    expect(new User()).toBeTruthy();
  });

  it('should set values in the constructor', () => {
    let user = new User({
      userName: 'Femi'
    });
    expect(user.userName).toEqual('Femi');
  })
});
