import axios from 'axios';

export async function sendResetPasswordRequest(email: string) {
  const result = await axios.post(
    `${import.meta.env.VITE_BACKEND_ROUTE}/users/forgot-pass`,
    { email },
  );

  return result;
}

export async function resetPassword(newPass: string, token: string) {
  const result = await axios.patch(
    `${import.meta.env.VITE_BACKEND_ROUTE}/users/reset-pass?token=${token}`,
    { newPass },
  );

  return result;
}
