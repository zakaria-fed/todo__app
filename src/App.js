import React from "react";
import { Button, Input } from "@material-ui/core";
import "./App.css";

function App() {
  return (
    <div>
      <form>
        <Input />
        <Button color="primary" variant="contained">
          Add
        </Button>
      </form>
    </div>
  );
}

export default App;
