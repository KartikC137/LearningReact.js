import Alert from "./components/alert";
import Button from "./components/button";
import { useState } from "react";

function App() {
  const [alertVisible, setAlertVisibility] = useState(false);
  return (
    <>
      {alertVisible && (
        <Alert
          onClose={() => setAlertVisibility(false)}
          text={"I woke up in a new Bugatti"}
        ></Alert>
      )}
      <Button
        onClick={() => {
          setAlertVisibility(true);
        }}
        text={"Click to show Alert"}
      ></Button>
    </>
  );
}
export default App;
