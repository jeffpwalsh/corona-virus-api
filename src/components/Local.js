import React, { useState } from "react";

function Local({ product }) {

 
 

  return (
    
      <div className="card">
        <div className="card-header">
       
          {/* PROPS BEING PASSED. CALLED FROM APP.JS TO PRODUCTS ARRAY */}
          <p className="card-title">Total Count (End of Day): {product.Cases}</p>
          
          <div className="card-body">
            <p>{product.Date}</p>

          </div>
        </div>
      </div>
    
  );
}

export default Local;
