import React, { useEffect, useState } from "react";
import Card from "./card";

function Products() {
  const [product, setProduct] = useState([]); 
  useEffect(() => {
    const fetchProducts = async () => {
      const products = await fetch("http://localhost:3005/product");
      const result = await products.json();
      setProduct(result);
    };
    fetchProducts();
  }, []); 
  return (
    <>
    <div className="main container mt-4">
      <div className="row">
        <div className="col-6 offset-3">
          <div class=" headings text-center">
            <h2>Products</h2>
          </div>
          <div className="products">
            {product.map((res) => {
              return <Card product={res}/>;
            })}
          </div>
        </div>
      </div>
    </div>
    </>
  );
}

export default Products;
