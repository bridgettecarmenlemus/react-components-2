import { useState } from "react";
import Loading from "./Loading";
import "./App.css";
import Loaded from "./Loaded";

function App() {
  // const isLoaded = true;
  // we use useState to let react know that we changed the variable
  const [isLoaded, setIsLoaded] = useState(false);
  const [objectExample, setObjectExample] = useState({ name: "don't need" }); //don't need this
  const [username, setUsername] = useState("Bridgette");
  const ternary = isLoaded ? "YES" : "NO 😥";
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

  return (
    <div className="App">
      <h1>Username is: {username !== "" ? username : "Guest"}</h1>
      <h1>Username is: {username || "Guest"}</h1>
      <h1>
        {isLoaded && (
          <>
            {numbers.map((num) => {
              return num + " & ";
            })}
            this is really Loaded
            <Loaded />
            <h2>I have {numbers.length} numbers</h2>
          </>
        )}
      </h1>

      <button
        onClick={() => {
          console.log("button clicked");
          setIsLoaded(!isLoaded); //used its own variable to do the opposite the ! can change from true to false
        }}
      >
        Change Loaded
      </button>
      <h1>{isLoaded ? "YES" : "NO 😥"}</h1>
      {isLoaded ? <Loaded /> : <Loading />}
      <h1>isLoaded = {String(isLoaded)}</h1>
      <h1>{ternary}</h1>
      <h1>{objectExample.name}</h1>
    </div>
  );
}

export default App;
