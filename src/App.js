import React, { useEffect } from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Kmain from "./components/KanbanMain/Kmain";
import { useDispatch, useSelector } from "react-redux";
import { fetchData } from "./func/func";

const App = () => {
  const dispatch = useDispatch();
  const { allTickets } = useSelector((state) => state.DataReducer);

  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

  // console.log(dispatch.state);

  return allTickets ? (
    <div style={{ paddingTop: "10px" }}>
      <Navbar />
      <hr style={{ marginTop: "10px" }} />
      <Kmain />
    </div>
  ) : (
    <h1>Patience is bitter, but its fruit is sweet......</h1>
  );
};

export default App;
