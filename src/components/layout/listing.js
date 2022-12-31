import React,{useState,useContext,useEffect} from "react";
import { Link } from "react-router-dom";
import { globalState } from "../pages/home";
import { FiEdit } from "react-icons/fi";
import { BsPlusLg } from "react-icons/bs";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { RiDeleteBin7Line } from "react-icons/ri";
import Modal from "../modal";
function Listing(props) {
  const[data, setData] = useState();
  const[record, setRecord] = useState();
  const[search, setSearch] = useState(); 
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
        alert("submitted");
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
            autoClose: 5000,
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

  // Search By Activity
  const searchApi = async() =>{
    const activities = await fetch("http://localhost:3005/activity/search/"+ search,{
      headers:{authorization: `bearer ${JSON.parse(localStorage.getItem('token'))}`}
    });
    const result = await activities.json();
      setData(result);
  }
  return (
    <div className="list-data mt-5">
      <div className="container-fluid">
        <div className="row justify-content-center">
          <div className="col-md-6 text-center mb-3 activities-heading">
            <h1 className="heading-section">User Activity Details</h1>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12 table-data">
            <div className="container">
              <div className="row">
                <div className="col-md-4 d-flex flex-row justify-content-between">
                  <select onChange={(e) =>setSearch(e.target.value)} 
                    className="form-select rounded align-self-center h-50 text-muted border w-75" 
                    >
                    <option selected value="all">all</option>
                    <option value="running">Running</option>
                    <option value="swimming">Swimming</option>
                    <option value="cycling">Cycling</option>
                    <option value="jumping">Jumping</option>
                    <option value="walking">Walking</option>
                    <option value="hiking">Hiking</option>
                  </select>
                  <button className="rounded align-self-center btn-primary h-50 w-25" onClick={searchApi}>Search</button>
                </div>
                <div className="col-md-4 offset-4 d-flex justify-content-end">
                  <Link to="/create">
                    <button className="btn btn-dark mb-3 mt-4  d-flex align-items-center justify-content-between">
                      <span>Create Activity</span>
                      <BsPlusLg className="create-icon bg-dark text-white" />
                    </button>
                  </Link>
                </div>
              </div>
            </div>
            <form></form>
            <div className="table-wrapper table">
              <table className="table">
                <thead className="thead bg-primary sticky-top">
                  <tr>
                    <th>Sl.</th>
                    <th>Name</th>
                    <th>Activity</th>
                    <th>Duration</th>
                    <th>Date</th>
                    <th style={{ width: "10%" }}>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {data?.map((resp,index) =>{
                   return <tr>
                    <th scope="row" className="scope">
                      {index + 1}
                    </th>
                    <td>{resp.name}</td>
                    <td>{resp.type}</td>
                    <td>{resp.duration}</td>
                    <td>{resp.date}</td>
                    <td className="actions-button">
                      <button className="btn" data-toggle="modal" data-target="#exampleModalCenter" onClick={()=>editHandler(resp._id)}>  
                        <FiEdit className="action-icon text-primary" />
                      </button>
                      <button className="btn" onClick={()=>deleteHandler(resp._id)}>
                        <RiDeleteBin7Line className="action-icon text-danger" />
                      </button>
                    </td>
                  </tr>
                  })
                }
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      <Modal data = {record} setData = {props.setData}/>
      <ToastContainer/>
    </div>
  );
}

export default Listing;
