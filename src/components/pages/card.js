import React,{useState} from "react"; 
import Modal from "./modal";

function Card(props) {
  const [data, setData] = useState([]);
  const editHandler = (event) => {
    let id = event.target.id; 
    if(id){
      const submitDetail = fetch(`http://localhost:3005/product/${id}`);
      let result = submitDetail.then((res) => {
        return res.json();
      });
      result.then((res) => {
        console.log(res);
        setData(res);
      });
    }
    else {
      alert("Please Enter a valid id");
    }
    
  };
  const deleteHandler = async(e) => {
    let id = e.target.id;
    const submitDetail = await fetch(`http://localhost:3005/product/${id}`, {
      method: "DELETE",
    headers: { 'Content-Type': 'application/json'},
    });
      let result =  submitDetail.json();
      console.log(submitDetail.status, result); 
  };
  return (
    <>
      <div className="card bg-light">
        <div className="row">
          <span className="col-12 col-md-6 col-lg-3 card-img">
            <img
              className="card-img-top"
              src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80"
              alt=""
            />
          </span>
          <div className="col-5 product-items">
            <ul className="product-item">
              <li className="text-uppercase text-success font-weight-bold">
                {props.product.name}
              </li>
              <li className="font-weight-bold">
                {props.product.price} 
              </li>
            </ul>
            <ul className="product-item">
              <li className="font-weight-bold">{props.product.category}</li>
              <li className="font-weight-bold">{props.product.company}</li>
            </ul>
          </div>
          <div className="col-4 product-icons">
            <button type="submit" onClick={editHandler} data-toggle="modal"
              data-target="#exampleModalCenter"
              id={props.product._id} className = "button bg-success">Edit
            </button>
            <button type="submit" onClick={deleteHandler} 
              id={props.product._id} className = "button bg-danger">Del
            </button>
          </div>
        </div>
      </div>
      <Modal data={data}/>
    </>
  );
}

export default Card;
