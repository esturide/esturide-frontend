import React, { useEffect, useState } from 'react';

export const useGetUserData = () => {
  const [loading, setLoading] = useState(true);
  const [userData, setUserData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await fetch('http://172.19.243.59:8000/users/1', {
          method: 'GET',
          headers: {
            Authorization: `Bearer ${'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoxMDEsImV4cCI6MTcxMTY2MjY3OH0.yJEfuBfNQVsgvfNaXwb0CfzgH_UUOUHowO5iLnk_sNo'}`
          }
        });
        const data = await result.json();
        setUserData(data);
      } catch (err) {
        console.log('Error fetching data', err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return [loading, userData];
};
