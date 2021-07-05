import React, { useState } from "react";
import { Button, Input } from "@material-ui/core";
import "./App.css";

function App() {
  const [todo, setTodo] = useState("");
  return (
    <div>
      <form>
        <Input value={todo} onChange={(e) => setTodo(e.target.value)} />
        <Button color="primary" variant="contained">
          Add
        </Button>
      </form>
    </div>
  );
}

export default App;
