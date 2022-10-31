import "./App.scss";
import Header from "./components/Header";
import HeaderClass from "./components/HeaderClass";
import DataDispClass from "./components/DataDispClass";
import DataDispFunc from "./components/DataDispFunc";
import TrafficLight from "./components/TrafficLight";
import TrafficLightClass from "./components/TrafficLightClass";
function App() {
  return (
    <>
      <Header></Header>
      <HeaderClass></HeaderClass>
      <h1>Hello world!</h1>
      <TrafficLight></TrafficLight>
      <TrafficLightClass></TrafficLightClass>
      {/* <DataDispFunc id="1" text="Some text" />
      <DataDispClass id="1" text="Some text" /> */}
    </>
  );
}

export default App;
