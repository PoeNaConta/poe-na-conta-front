// import { waitFor } from "@testing-library/dom";
import axios from 'axios';
import loginService from 'src/services/login';
import { UserLoginBody } from 'src/services/login/types';

describe('LoginService', () => {
  const axiosPostSpy = vi.spyOn(axios, 'post');
  // const sessionStorageSetItemSpy = vi.spyOn(sessionStorage, 'setItem');

  beforeEach(() => {
    axiosPostSpy.mockImplementation((_url, body: UserLoginBody) => {
      if (body.email === 'example@email.com' && body.password === 'qwe123')
        return new Promise(() => ({ data: { token: 'mocked_jwt' } }));
      else
        return new Promise(() => ({
          data: { message: 'Not found' },
          status: '401',
        }));
    });
  });

  it('should fetch jwt', () => {
    loginService({ email: 'example@email.com', password: 'qwe123' });

    expect(axiosPostSpy).toBeCalledWith('undefined/login', {
      email: 'example@email.com',
      password: 'qwe123',
    });
  });
});
