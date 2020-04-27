// import React, { useState } from "react";
// import Product from './Product'

// function FetchData() {
//   const [posts, setPosts] = useState(["one", "two", "three"]);



  
//   const handleDataFetch = () => {
//     fetch("https://api.covid19api.com/summary")
//       .then((response) => response.json())
//       .then((data) => {
//         setPosts(data.Countries);
//         console.log(data.Countries);
//       });
//   };



//   const list = posts.map(product => <Product product={product} />)

//   return (
//     <div class="container-fluid">
//       <button onClick={handleDataFetch}>Fetch Info</button>
//       <div class="row">
//         <div class="col">{list}</div>
//       </div>
//     </div>
//   );
// }

// export default FetchData;
