import React, { useState, useEffect } from "react";
import "./App.css";

//import componenets
import Form from "./components/Form";
import TodoList from "./components/TodoList";

function App() {
  //State stuff
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState("all");
  const [filteredTodos, setFilteredTodos] = useState([]);

  //useEffects
  //Run once when app starts
  useEffect(() => {
    getLocalTodos();
  }, []);
  //Run Multiple times
  useEffect(() => {
    //console.log("useEffect Logged");
    filterHandler();
    saveLocalTodos();
  }, [todos, status]);

  //function
  const filterHandler = () => {
    switch (status) {
      case "complete":
        setFilteredTodos(todos.filter((todo) => todo.completed === true));
        break;
      case "uncompleted":
        setFilteredTodos(todos.filter((todo) => todo.completed === false));
        break;
      default:
        setFilteredTodos(todos);
        break;
    }
  };

  //Save to local storage
  const saveLocalTodos = () => {
      localStorage.setItem("todos", JSON.stringify(todos));
  };
  //Load from local storage
  const getLocalTodos = () => {
    if (localStorage.getItem("todos") === null) {
      //Save to local storage as JSON
      localStorage.setItem("todos", JSON.stringify([]));
    } else {
      //Parse JSON and set to todos var for display
      let todoFromLocal = JSON.parse(localStorage.getItem("todos"));
      setTodos(todoFromLocal);
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>The Great Todo List!</h1>
      </header>
      <Form
        todos={todos}
        setTodos={setTodos}
        inputText={inputText}
        setInputText={setInputText}
        setStatus={setStatus}
      />
      <TodoList
        setTodos={setTodos}
        todos={todos}
        filteredTodos={filteredTodos}
      />
    </div>
  );
}

export default App;
