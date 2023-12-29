import "./App.css";
import "./assets/css/animate.css";
import "./assets/css/bootstrap-5.0.0-beta2.min.css";
import "./assets/css/LineIcons.2.0.css";
import "./assets/css/main.css";
import "./assets/css/tiny-slider.css";
import PetsList from "./Components/PetsList";
import { useState } from "react";
function App() {
  return (
    <div className="App">
      <PetsList />
      <Change></Change>
    </div>
  );
}
function Change() {
  const [x, setX] = useState("");
  function handle(e) {
    console.log(e.target.value);
    setX(e.target.value);
  }

  return (
    <dive>
      <label>Search</label>
      <input onChange={handle} />
      <p>you are searching for{x}</p>
    </dive>
  );
}
// function InitialValue(x) {
//   const [x, setX] = useState(0);
//   function handle() {
//     setX(x + 1);
//   }
//   return (
//     <div onClick={handle}>
//       <h1>Clicked me</h1>
//       <p>{x}</p>
//     </div>
//   );
// }

// InitialValue(setX);

export default App;
