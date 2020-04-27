import React from "react";

function Product({ product }) {
  return (
    <div>
      <div className="card">
        <div className="card-header">{product.Country}</div>
        <div className="card-body">
          <p>New Confirmed: {product.NewConfirmed}</p>
          <p>New Deaths: {product.NewDeaths}</p>
          <p>New Recovered: {product.NewRecovered}</p>
          </div>
          <div className="card-footer">
          <p>Total Confirmed: {product.TotalConfirmed}</p>
          <p>Total Deaths: {product.TotalDeaths}</p>
          <p>Total Recovered: {product.TotalRecovered}</p>
        </div>
      </div>
    </div>
  );
}

export default Product;
