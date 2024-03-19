import { REACT_APP_API_ENDPOINT } from '@env';

export const setUserData = async (bearer: string, id: number, data: any) => {
  await fetch(`${REACT_APP_API_ENDPOINT}/users/${id}`, {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
      Accept: 'application/json',
      Authorization: `Bearer ${bearer}`,
      'Content-Type': 'application/json'
    }
  });
};

export const getUserData = async (bearer: string, id: number) => {
  return await fetch(`${REACT_APP_API_ENDPOINT}/users/${id}`, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${bearer}`
    }
  });
};

export const getAuthToken = async (username: string) => {
  return await fetch(`${REACT_APP_API_ENDPOINT}/login`, {
    method: 'POST',
    body: JSON.stringify({
      username: username
    }),
    headers: {
      Accept: 'application/json'
    }
  });
};