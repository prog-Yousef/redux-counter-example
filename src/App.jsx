import "./App.css";
import { useDispatch } from "react-redux";
import { increment } from "./reducers/counterReducer";

import ViewCounter from "./components/ViewCounter";

/**
 * Store - Sparar vårt state
 * Reducer - Som uppdaterar vårt state
 * Action - Som säger vad vi ska uppdatera
 * Dispatch - Som triggar en action
 */

function App() {
  const dispatch = useDispatch();

  function handleClick() {
    dispatch(increment(1)); // Startar uppdatering av store med att kalla på den action vi vill köra och skicka med vad vi vill spara i vår store
  }

  function decrement() {
    dispatch(increment(-1));
  }

  return (
    <>
      <h1>Räknare</h1>
      <ViewCounter />
      <section>
        <button onClick={handleClick}>Öka med 1</button>
        <button onClick={decrement}>minska med 1</button>
       <button onClick={() => document.body.style.background = "#"+((Math.random()*0xffffff<<0).toString(16))}>byt färg</button>      
      </section>
    </>
  );
}

export default App;