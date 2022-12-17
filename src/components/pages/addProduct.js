import React, { useState } from "react"; 
import { useNavigate} from "react-router-dom";
function CreateProduct() {
  const navigate = useNavigate();
  const [err, setErr] = useState(null);
  const auth = localStorage.getItem("user"); 
  const postProduct = async (event) => {
    setErr(null);
    event.preventDefault();
    let name = event.target.name.value;
    let price = event.target.price.value;
    let company = event.target.company.value;
    let category = event.target.category.value;
    let userId= JSON.parse(auth)._id;
    console.log(name, price, company, category);
    if (name && price && company && category !== "") {
      const submit_data = await fetch("http://localhost:3005/product", {
        method: "POST",
        body: JSON.stringify({
          name,
          price,
          company,
          category,
          userId
        }),
      headers: { 'Content-Type': 'application/json'}
      });
      const result = await submit_data.json();
      console.log("result", result);
      if (submit_data.status === 200) {
        console.log(result);
        navigate("/");
      } else {
        setErr(result.message);
      }
    }
  };
  return (
    <div className="formSection main">
      <div className="container">
        <div className=" headings text-center">
          <h1>Create Product</h1>
          {err ? <span className="text-danger danger-text">{err}</span> : ""}
        </div>
        <div className="row mt-4">
          <div className="col-lg-8 col-md-8 col-10 offset-lg-2 offset-md-2 offset-1">
            <form id="makeTodo" onSubmit={postProduct}>
              <div className="form-group mt-5">
                <input
                  type="text"
                  name="name"
                  className="form-control"
                  placeholder="Enter Product Name..."
                />
              </div>

              <div className="form-group mt-3">
                <input
                  type="text"
                  name="price"
                  className="form-control"
                  placeholder="Enter Price..."
                />
              </div>
              <div className="form-group mt-3">
                <input
                  type="text"
                  name="company"
                  className="form-control"
                  placeholder="Compnay Name..."
                />
              </div>
              <div className="form-group mt-3">
                <input
                  type="text"
                  name="category"
                  class="form-control"
                  placeholder="Product Category..."
                />
              </div>
              <div className="form-button d-flex justify-content-center mt-5">
                <button type="submit" class="btn btn-info p-2">
                  Create Product
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CreateProduct;
