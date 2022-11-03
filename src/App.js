import "./App.scss";
import { useState } from "react";
import Header from "./components/Header";
import HeaderClass from "./components/HeaderClass";
import DataDispClass from "./components/DataDispClass";
import DataDispFunc from "./components/DataDispFunc";
import TrafficLight from "./components/TrafficLight";
import TrafficLightClass from "./components/TrafficLightClass";
import TestComponent from "./components/TestComponent";
import StarRating from "./components/TestUseMemo";
function App() {
  const [rend, setRend] = useState(false);
  const [count, setCount] = useState(0);
  return (
    <>
      {/* <button
        onClick={() => {
          setRend(!rend);
        }}
      >{`${rend}`}</button>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >{`${count}`}</button> */}
      {/* <Header></Header>
      <HeaderClass></HeaderClass>
      <h1>Hello world!</h1>
      <TrafficLight></TrafficLight>
      <TrafficLightClass></TrafficLightClass> */}
      {/* <DataDispFunc id="1" text="Some text" />
      <DataDispClass id="1" text="Some text" /> */}
      {/* {true && <TestComponent count={count}></TestComponent>} */}
      {/* <TestUseMemo a={2} b={5}></TestUseMemo> */}
      {<StarRating></StarRating>}
    </>
  );
}

export default App;
