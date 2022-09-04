import "./App.css";
import React, { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [posts, setPosts] = useState("");

  useEffect(() => {
    try {
      async function fetchData() {
        const request = await axios.get("api/Products");
        console.log("inside", request);
        setPosts(request);
      }
      fetchData();
    } catch (error) {
      console.error(error.response.data);
    }
  }, []);
  console.log("outside", posts);

  return (
    <div className="App">
      <h1>Product List</h1>
      {posts.data?.map((data) => (
        <div>
          <button className="button">{data?.name}</button>
          <div>
            {data?.sku},{data?.info}
          </div>
        </div>
      ))}
    </div>
  );
}

export default App;
