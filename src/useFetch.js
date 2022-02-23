import React, {useState, useEffect} from 'react'

const useFetch = (url) => {
 const [data, setData] = useState([]);
 const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const fetchData = async () => {
    try {
      setIsLoading(true);
      setError(null);
      const response = await fetch(url);
      if (!response.ok) {
        const message = `An error has occured : ${response.statusText}`;
        throw Error(message);
      } else {
        const apiData = await response.json();
        setData(apiData);
        setIsLoading(false);
      }
    } 
    catch (error) {
      setIsLoading(false);
      setError(error.message);
    }
  };


useEffect(()=>{
    fetchData();
}, [])
  return {data, isLoading, error}
}

export default useFetch