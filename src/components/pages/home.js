import React,{useEffect,useState,createContext} from 'react' ;
import Listing from '../layout/listing'
export const globalState = createContext();
function Home() {
  const [data, setData] = useState();   
  const [err, setErr] = useState();
  let id = JSON.parse(localStorage.getItem('user'))?._id;
  useEffect(()=>{
    fetchApi();
  },[]);
  const fetchApi = async() =>{
    const submit_data = await fetch(`http://localhost:3005/activity/${id}`,{
      headers:{authorization: `bearer ${JSON.parse(localStorage.getItem('token'))}`}
    });
    const result = await submit_data.json();
    if(submit_data.status === 200) {
      setData(result); 
    } else {
      setErr(result.message);
    }
  }
  return (
    <globalState.Provider value={{apiData:data}}>
      <div>
        {err&&<span className='text-danger'>{err}</span>}
        {data&&<Listing setData= {fetchApi} updateState = {setData}/>}
      </div>
    </globalState.Provider>
  )
}

export default Home

