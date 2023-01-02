import React,{useState,useEffect} from "react"; 
import { useParams } from "react-router-dom"; 
import { BiCycling } from "react-icons/bi";
import { GiJumpAcross } from "react-icons/gi"; 
import { FaRunning, FaWalking, FaSwimmer, FaHiking } from "react-icons/fa";
function Details() {    
    const[data, setData] = useState(); 
  let user = JSON.parse(localStorage.getItem('user'));
  let _id = user?._id;
  
  const {id} = useParams();
    useEffect(() =>{
       fetchApi()
      },[]);
      const fetchApi = async() =>{
        const submit_data = await fetch(`http://localhost:3005/activity/${_id}`,{
          headers:{authorization: `bearer ${JSON.parse(localStorage.getItem('token'))}`}
        });
        const result = await submit_data.json();
        if(submit_data.status === 200) {
           let record =  result.filter (res =>{
                return res._id === id
            })
          setData(record); 
        }
      }
    data?.map(res =>{
        return console.log(res);
    })
  return (
    <div className="mt-5">
        <div className="container">
            <div className="row">
                <div className="col-8 offset-2 container details d-flex flex-direction-between flex-column">
                   {data?.map(resp =>{
                    return <>
                        <div className="row mt-3 basic">
                        <div className="col-4">
                        {
                            resp.type === 'cycling'?<BiCycling className="icons"/>:resp.type === 'hiking'?<FaHiking className="icons"/>:
                            resp.type === 'walking'?<FaWalking className="icons"/>:resp.type === 'running'?<FaRunning className="icons"/>:resp.type === 'swimming'?<FaSwimmer className="icons"/>:resp.type === 'jumping'?<GiJumpAcross className="icons"/>:''
                        }
                        </div>
                        <div className="col-4">{resp.name}</div>
                        <div className="col-4">{resp.date}</div>
                    </div>
                    <div className="row basic">
                        <div className="col-4">{resp.duration}</div>
                        <div className="col-4">{resp.description}</div>
                        <div className="col-4">{resp.type}</div>
                    </div>
                    <div className="row user">
                        <div className="col-4">{user?.email}</div>
                        <div className="col-4">{user?.name}</div>
                        <div className="col-4">{user?.phone}</div>
                    </div>
                    </>
                    })
                    }
                    
                </div>
            </div>
        </div>
    </div>
  )
}

export default Details
