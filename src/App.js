import "./App.css";
import React, { useState, useEffect } from "react";
import { Loading } from "./Loading";
import { Tours } from "./Tours";

const url = "https://course-api.com/react-tours-project";
function App() {
  const [loading, setLoading] = useState(true);
  const [tours, setTours] = useState([]);

  const deleteTour = (id) => {
    const newTour = tours.filter((tour) => tour.id !== id);
    setTours(newTour);
  };

  const fetchTours = async () => {
    setLoading(true);
    try {
      const response = await fetch(url);
      const tours = await response.json();
      setLoading(false);
      setTours(tours);
    } catch (error) {
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchTours();
  }, []);

  if (loading) {
    return <Loading />;
  }

  if (tours.length === 0) {
    return (
      <div className="main">
        <h1>0 Tour Left</h1>
        <button onClick={fetchTours}>Refresh</button>
      </div>
    );
  }
  return (
    <div className="main">
      <Tours tours={tours} deleteTour={deleteTour} />
    </div>
  );
}
export default App;
