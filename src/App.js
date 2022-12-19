import logo from './logo.svg';
import './App.css';
import NotCompleted from './components/notCompleted';
import Completed from './components/completed';
import style from './App.module.css'
import React from 'react';
function App() {
  let [tasks, updateTask] = React.useState([]);
  let [id, updateID] = React.useState(0);
  const inputTake = () => {
    let str = window.prompt("Enter Task");
    if (str == null) {
      return;
    }
    str = str.trim();
    if (str.length == 0) return;
    console.log(str);
    let oneTask = {
      task: str,
      isCompleted: false,
      id: id
    }
    let newTask = [...tasks, oneTask];
    updateTask(newTask);
    console.log(newTask);
    updateID(id + 1);
  }
  const changeInTask = (task) => {
    task.isCompleted = true;
    for (let i = 0; i < tasks.length; i++) {
      if (task.id == tasks[i].id) {
        tasks.splice(i, 1);
        break;
      }
    }
    let newTask = [...tasks, task];
    updateTask(newTask);
  }
  const deleteTask = (task) => {
    task.isCompleted = true;
    for (let i = 0; i < tasks.length; i++) {
      if (task.id == tasks[i].id) {
        tasks.splice(i, 1);
        break;
      }
    }
    let newTask = [...tasks];
    updateTask(newTask);
    // console.log(task)
  }
  return (
    <>
      <div className={style.main}>
        <div className={style.buttonDiv}>
          <button className={style.button} onClick={() => inputTake()}> Add a Task</button>
        </div>
        <div className={style.divideEqual}>
          <div className={style.notComplete}>
            <h3>Pending</h3>
            <NotCompleted changeInTask={changeInTask} tasks={tasks} />
          </div>
          <div className={style.complete}>
            <h3>Completed</h3>
            <Completed deleteTask={deleteTask} tasks={tasks} />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
