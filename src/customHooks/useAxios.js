import axios from 'axios' 
import {useState, useEffect} from 'react'

const useAxios= (url)=>
{

 const [data, setData] = useState(null);

 useEffect(()=>{
  axios.get(url).then(
      rep=>{console.log(rep.data.Search);
              setData(rep.data.Search);
  }
   );

 },[url])

   console.log("------data");
  console.log(data);
  return data;

}

export default useAxios;