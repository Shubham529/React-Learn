import "./App.css";
import Header from "./MyComponents/Header";
import { Todos } from "./MyComponents/Todos";
import { AddTodo } from "./MyComponents/AddTodo";
import { Footer } from "./MyComponents/Footer";
import { useState } from "react";
import {useEffect}  from "react";
import {About} from "./MyComponents/About";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
function App() {
  let initTodo;
  if (localStorage.getItem("todos") === null) {
    initTodo = [];
  } else {
    initTodo = JSON.parse(localStorage.getItem("todos"));
  }

  const onDelete = (todo) => {
    // console.log("I am onDelete of todo",todo);
    // let index = todo.indexOf(todo);
    //  todos.splice(index,1);
    //Deleting this way in react dos nt work

    setTodos(
      todos.filter((e) => {
        return e !== todo;
      })
    );
    localStorage.setItem("todos", JSON.stringify(todos));
  };

  const addTodo = (title, desc) => {
    console.log("I am Adding todo", title, desc);
    let sno;

    //Loop to make sno of todos be maintained, if there is no todo then should start from 0
    if (todos.length === 0) {
      sno = 0;
    } else {
      sno = todos[todos.length - 1].sno + 1;
    }
    const myTodo = {
      title: title,
      desc: desc,
      sno: sno,
    };
    setTodos([...todos, myTodo]);
    console.log(myTodo);
  };

  const [todos, setTodos] = useState(initTodo);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <>
    <Router>
      <Header title="My Todos" searchBar={false} />
      <Switch>
        <Route exact path="/" render={()=>{
          return(
            <>
        <AddTodo addTodo={addTodo}/>
        <Todos todos={todos} onDelete={onDelete} />
        </> )
          }}>
          
          </Route>
          <Route path="/about">
            <About />
          </Route>
          </Switch>
      <Footer />
      </Router>
    </>
  );
}

export default App;
// Todos = todos pass kiya ..app.js s 2 chizze ---- todos.js m props.todos n ondelete ka use kroo
//todos.item beti....self earned and ancestor giftsss....
