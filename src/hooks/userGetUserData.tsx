import React, { useEffect, useState } from 'react';
import { REACT_APP_API_ENDPOINT } from '@env';

export const useGetUserData = () => {
  const [loading, setLoading] = useState(true);
  const [userData, setUserData] = useState([]);
  const [err, setErr] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await fetch(`${REACT_APP_API_ENDPOINT}/users/1`, {
          method: 'GET',
          headers: {
            Authorization: `Bearer ${'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoxMDEsImV4cCI6MTcxMTY2MjY3OH0.yJEfuBfNQVsgvfNaXwb0CfzgH_UUOUHowO5iLnk_sNo'}`
          }
        });
        const data = await result.json();
        setUserData(data);
      } catch (error) {
        console.log('Error fetching data', error);
        setErr(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return [loading, userData];
};
