import { useEffect, useState } from 'react';
import { getUserData } from '../utils/userData.ts';

export const useGetUserData = () => {
  const [loading, setLoading] = useState(true);
  const [userData, setUserData] = useState([]);
  const [err, setErr] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await getUserData(
          'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoxMDEsImV4cCI6MTcxMTY2MjY3OH0.yJEfuBfNQVsgvfNaXwb0CfzgH_UUOUHowO5iLnk_sNo',
          1
        );
        const data = await result.json();
        setUserData(data);
      } catch (error) {
        console.log('Error fetching data', error);
        setErr(err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return [loading, userData];
};
