import Alert from "./components/alert.tsx";
import Button from "./components/button.tsx";
import { useState } from "react";
let i = 0;
function App() {
  const [variant, setVariant] = useState("info");
  return (
    <>
      <div>
        <Button
          onClick={() => {
            i++;
            console.log(i);
            if (i % 4 === 0) {
              setVariant("danger");
            } else if (i % 4 === 1) {
              setVariant("warning");
            } else if (i % 4 === 2) {
              setVariant("info");
            } else if (i % 4 === 3) {
              setVariant("success");
            }
          }}
          color={variant}
        >
          A dangerous Button
        </Button>
        <Alert>Hello World!</Alert>
      </div>
    </>
  );
}

export default App;
