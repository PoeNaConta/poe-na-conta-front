import axios from 'axios';
import loginService from 'src/services/login';
import { UserLoginBody } from 'src/services/login/types';

describe('LoginService', () => {
  const axiosPostSpy = vi.spyOn(axios, 'post');

  beforeEach(() => {
    axiosPostSpy.mockImplementation((_url, body: UserLoginBody) => {
      if (
        body.useremail === 'example@email.com' &&
        body.passwordhash === 'qwe123'
      )
        return new Promise(() => ({ data: { token: 'mocked_jwt' } }));
      else
        return new Promise(() => ({
          data: { message: 'Not found' },
          status: '401',
        }));
    });
  });

  it('should fetch jwt', () => {
    loginService({ useremail: 'example@email.com', passwordhash: 'qwe123' });

    expect(axiosPostSpy).toBeCalledWith('http://localhost:5000/api/login', {
      useremail: 'example@email.com',
      passwordhash: 'qwe123',
    });
  });
});
