import { useEffect, useState } from "react";
import "./App.css";
import Products from "./Products";
import Navbar from "./Navbar";
function App() {
  const [data, setData] = useState([]);
  const [originalData, setOriginalData] = useState([]); // store original API data
  const [loading, setLoading] = useState(true);
const [dataa, setDataa] = useState([]);
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((apiData) => {
        setData(apiData);
        setOriginalData(apiData);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Fetch Error:", err);
        setLoading(false);
      });
  }, []);

if (loading) return <p>Loading...</p>;

  // ASCENDING
  const ascend = () => {
    const sorted = [...data].sort((a, b) => a.price - b.price);
    console.log(sorted);
    setData(sorted);
  };

  // DESCENDING
  const descend = () => {
    const sorted = [...data].sort((a, b) => b.price - a.price);
    setData(sorted);
  };

  // FILTER BY CATEGORY
  const filterCategory = (category) => {
    const filtered = originalData.filter(
      (product) => product.category === category
    );
    setData(filtered);
  };

  return (
    <>
    <div><select id="course">
  <option>filter</option>
  <option onClick={ascend}>ascend</option>
  <option onClick={descend}>descend</option>
  <option value="react">re</option>
  category
</select>
</div>
      
      <button  onClick={ascend}>Descend</button>

      <button onClick={() => filterCategory("electronics")}>
        Electronics
      </button>

      <button onClick={() => filterCategory("jewelery")}>
        Jewelery
      </button>

      <Navbar />
<Products data={data}/>
     
    </>
  );
}

export default App;
