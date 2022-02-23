//import React,{useState, useEffect} from 'react'
import DisplayEpisodes from './DisplayEpisodes';
import useFetch from '../useFetch';


/*
const FetchEpisodes = () => {
  
  const bobsApi = "https://bobsburgers-api.herokuapp.com/episodes"  
  const [error, setError] = useState(null);
  const [data, setData] = useState([]);
  const [isloading, setIsLoading] = useState(false);


  const fetchMealWithId = async () => {
    try {
      setIsLoading(true);
      setError(null);
      const response = await fetch(bobsApi);
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
  useEffect(() => {
    fetchMealWithId();
  }, []);

    data && console.log(data)
  return (
    <div>
        {isloading && <h1>Loading...</h1>}
        <div className='container'>
        <DisplayEpisodes episodes = {data}/>
        </div>
    </div>
  )
}*/


const FetchEpisodes = () => {
  const { data, isLoading, error } = useFetch(`https://bobsburgers-api.herokuapp.com/episodes`);
  return (
    <div>
    {isLoading && <h1 className="loader">Loading...</h1>}
    {error && <h3> Error: Something went wrong</h3>}
    <div className='container'>
        <DisplayEpisodes episodes = {data}/>
      </div>
    </div>
  )
}

export default FetchEpisodes

