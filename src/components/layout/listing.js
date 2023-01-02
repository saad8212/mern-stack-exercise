import React,{useState,useContext,useEffect} from "react";
import { Link } from "react-router-dom";
import { globalState } from "../pages/home";
import { FiEdit } from "react-icons/fi";
import { BiCycling } from "react-icons/bi";
import { GiJumpAcross } from "react-icons/gi"; 
import { FaRunning, FaWalking, FaSwimmer, FaHiking } from "react-icons/fa";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { RiDeleteBin7Line } from "react-icons/ri";
import Modal from "../modal";
function Listing(props) {
  const[data, setData] = useState();
  const[record, setRecord] = useState(); 
  const {apiData} = useContext(globalState);
  useEffect(() =>{
    setData(apiData);
  },[apiData])
  const editHandler = (id) => {
    console.log(id, "............................");
    if(id){
      const submitDetail = fetch(`http://localhost:3005/edit-activity/${id}`,{
        headers:{authorization: `bearer ${JSON.parse(localStorage.getItem('token'))}`}
      });
      let result = submitDetail.then((res) => {
        return res.json();
      });
      result.then((res) => {
        console.log("result", res);
        console.log(res);
        setRecord(res);
      });
    }
    else {
      console.log("Please Enter a valid id");
    }
  };

  //Delete record from database
  const deleteHandler = async(id) =>{
    console.log(id);
    if(id){
      const submitDetail = await fetch(`http://localhost:3005/activity/${id}`, {
      method: "DELETE",
      headers:{authorization: `bearer ${JSON.parse(localStorage.getItem('token'))}`}
    });
      let result = await submitDetail.json(); 
      if(submitDetail.status === 200) {
        let deleteToast = () =>{
          toast.success("Activity Deleted!",{
            position:"top-center",
            autoClose: 2000,
            theme: "colored",
          });
        }
        deleteToast();
        props.setData();
        console.log("deleted");
      } else {
        console.log(result.message);
      }
    }
    else {
      console("Please Enter a valid id");
    }
  };
 
  return (
    <div className="list-data mt-5">
      <div className="container-fluid">
        <div className="row justify-content-center">
          <div className="col-md-6 text-center mb-3 activities-heading">
            <h1 className="heading-section">User Activity Details</h1>
          </div>
        </div>
              <div className="row">
                <div className="col-4 offset-7 pl-5">
                  <Link to="/create">
                    <button className="btn btn-primary mb-3 mt-4  d-flex align-items-center justify-content-between">
                      <span>Create Activity</span>
                    </button>
                  </Link>
                </div>
              </div> 
            <div className="row table-wrapper">
              <div className="col-6 offset-3">
                <div className="card bg-dark text-light container fixed">
                  <ul className="d-flex flex-row justify-content-between pr-3">
                    <li>Activity</li>
                    <li className="pr-5">Name</li>
                    <li>Actions</li>
                  </ul>
                </div>
              {data?.map((resp,index) =>{
                   return <Link to ={`/details/${resp._id}`}> 
                   <div className="card">
                <div className="container">
                 
                  <ul className="d-flex flex-row justify-content-between align-items-center">
                    <li>{
                      resp.type === 'cycling'?<BiCycling className="icon"/>:resp.type === 'hiking'?<FaHiking className="icon"/>:
                      resp.type === 'walking'?<FaWalking className="icon"/>:resp.type === 'running'?<FaRunning className="icon"/>:resp.type === 'swimming'?<FaSwimmer className="icon"/>:resp.type === 'jumping'?<GiJumpAcross className="icon"/>:''
                      }</li>
                    <li>{resp.name}</li>
                    <li>
                    <button className="btn" data-toggle="modal" data-target="#exampleModalCenter" onClick={()=>editHandler(resp._id)}>  
                        <FiEdit className="action-icon text-primary" />
                      </button>
                      <button className="btn" onClick={()=>deleteHandler(resp._id)}>
                        <RiDeleteBin7Line className="action-icon text-danger" />
                      </button>
                    </li>
                  </ul>
                </div>
                </div>
                </Link>
              })
              }
              </div>
            </div>
            
          </div>
        
      <Modal data = {record} setData = {props.setData}/>
      <ToastContainer/>
    </div>
  );
}

export default Listing;
