import { useState } from "react";
import "./App.css";
import { Button, Input } from "@material-ui/core";
import { createStore, combineReducers } from "redux";

function App() {
  // Create Action Creators
  const createActiveTask = (title) => {
    return {
      type: "CREATE_ACTIVE_TASK",
      payload: {
        title: title,
      },
    };
  };

  const makeTaskDone = (title) => {
    return {
      type: "TASK_DONE",
      payload: {
        title: title,
      },
    };
  };

  // Create the 2 Reducers
  const activeReducer = (listOfActiveTasks = [], action) => {
    if (action.type === "CREATE_ACTIVE_TASK") {
      return [...listOfActiveTasks, action.payload];
    } else {
      return listOfActiveTasks.filter((task) => task.title !== action.type);
    }
  };

  const doneReducer = (listOfDoneTasks = [], action) => {
    if (action.type !== "TASK_DONE") {
      return listOfDoneTasks;
    } else {
      return [...listOfDoneTasks, action.payload];
    }
  };

  // Combine The Reducers
  const reducers = combineReducers({
    activeReducer: activeReducer,
    doneReducer: doneReducer,
  });

  // Create Store
  const store = createStore(reducers);

  const [todo, setTodo] = useState("");
  const [activeTodos, setActiveTodos] = useState([]);
  const [doneTodos, setDoneTodos] = useState([]);

  const addTask = (e) => {
    e.preventDefault();

    if (todo !== "") {
      store.dispatch(createActiveTask(todo));
      setTodo("");
      setActiveTodos((prev) => [...prev, store.getState().activeReducer]);
    } else {
      alert("Please try to fill the input");
    }
  };

  const removeTask = (task) => {
    store.dispatch(makeTaskDone(task));
    setDoneTodos((prev) => [...prev, store.getState().doneReducer]);
  };

  return (
    <div className="App">
      <form>
        <Input
          placeholder="Enter your todo"
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
        />
        <br />
        <br />
        <Button
          type="submit"
          onClick={addTask}
          variant="contained"
          color="primary"
        >
          Add todo
        </Button>
        {activeTodos.map((task) => (
          <h6 key={Math.random()}>
            {task[0].title}
            <Button
              onClick={() => removeTask(task[0])}
              color="secondary"
              variant="contained"
            >
              Remove
            </Button>
          </h6>
        ))}

        
      </form>
    </div>
  );
}

export default App;
