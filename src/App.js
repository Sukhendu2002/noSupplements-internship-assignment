import "./App.css";
import axios from "axios";
import { useEffect, useState } from "react";
import Card from "./components/Card";


function App() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  // pop the card by id from the array
  const deleteCard = (id) => {
    const newData = data.filter((item) => item.id !== id);
    setData(newData);
  };
  const updateCard = (data) => {
    const newData = data.filter((item) => item.id !== data.id);
    setData(newData);
  };

  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/users").then((res) => {
      setData(res.data);
      setLoading(false);
    });
  }, []);
  console.log(loading);

  return (
    <div className="App">

      {loading ? (
        <img src="/images/load1.png" alt="loading" style={{ height: "50px" }} />
      ) : (
        data.map((item) => (
          <Card
            key={item.id}
            item={item}
            deleteCard={deleteCard}
            updateCard={updateCard}
          />
        ))
      )}
    </div>
  );
}

export default App;
