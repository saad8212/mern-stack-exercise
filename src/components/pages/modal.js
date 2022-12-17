import React, { useRef, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
function Modal({ data }) {
  const [err, setErr] = useState(null);
  const auth = localStorage.getItem("user");
  const navigate = useNavigate();
  console.log(JSON.parse(auth)?._id);
  const name = useRef();
  const price = useRef();
  const company = useRef();
  const category = useRef();

  useEffect(() => {
    name.current.value = data.name;
    price.current.value = data.price;
    company.current.value = data.company;
    category.current.value = data.category;
  }, [data]);

  const updateProduct = async (event) => {
    event.preventDefault();
    setErr(null);
    console.log(name.current.value);
    let update_name = name.current.value;
    let update_price = price.current.value;
    let update_company = company.current.value;
    let update_category = category.current.value;
    let user_id = JSON.parse(auth)?._id;
    if (
      update_name &&
      update_price &&
      update_company &&
      user_id &&
      update_category !== ""
    ) {
      const submit_data = await fetch(
        "http://localhost:3005/product/" + data._id,
        {
          method: "PUT",
          body: JSON.stringify({
            name:update_name,
            price:update_price,
            company:update_company,
            category:update_category,
            userId:user_id
          }),
          headers: { "Content-Type": "application/json" },
        }
      );
      let result = await submit_data.json();
      if (submit_data.status === 200) {
        navigate("/");
       console.log(event);
        setErr(result.messasge);
        return false;
      }
    } else {
        return false;
    }
  };
  return (
    <div>
      <div
        className="modal fade"
        id="exampleModalCenter"
        tabIndex="-1"
        role="dialog"
        aria-labelledby="exampleModalCenterTitle"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content">
            <div className="modal-header bg-dark text-white">
              <h5 className="modal-title" id="exampleModalLongTitle">
                Update {data.name}
              </h5>
              <span>{err ? err : ""}</span>
              <button
                type="button"
                className="close text-white"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <div className="container">
                <form id="makeTodo">
                  <div class="form-group">
                    <label>Name</label>
                    <input type="text" ref={name} class="form-control" />
                  </div>
                  <div class="form-group">
                    <label>Price</label>
                    <input
                      type="text"
                      ref={price}
                      id="price"
                      name="price"
                      class="form-control"
                    />
                  </div>
                  <div class="form-group">
                    <label>Company</label>
                    <input
                      type="text"
                      ref={company}
                      name="company"
                      class="form-control"
                    />
                  </div>
                  <div class="form-group">
                    <label>Category</label>
                    <input
                      type="text"
                      ref={category}
                      name="category"
                      class="form-control"
                    />
                  </div>
                  <div className="form-button text-center">
                    <button
                      type="submit"
                      className="btn btn-dark" 
                      onClick={updateProduct}
                    >
                      Update
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Modal;
