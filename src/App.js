import { useState } from 'react'
import './App.css';
import Header from './components/Header';
import Tasks from './components/Tasks';
import AddTask from './components/AddTask';

const App = () => {

  const [showAddTask, setshowAddTask] = useState(false)

  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: 'Doctors Appointment',
      day: 'Dec 13th at 12:30pm',
      reminder: true
    },
    {
      id: 2,
      text: 'Deployment turn',
      day: 'Dec 13th at 10:00am',
      reminder: false
    },
    {
      id: 3,
      text: 'Vaccine Appointment',
      day: 'Dec 15th at 12:30pm',
      reminder: true
    }])


    //Add Tasks
    const addTask = (task) => {
      const id = Math.floor(Math.random()*10000) + 1
      const newTask = {id, ...task }
      setTasks([...tasks, newTask])
    }

    // Delete Tasks;
    const deleteTask = (id) => {
      setTasks(tasks.filter((task) => task.id !== id));
    }


    //Toggle Reminder
    const toggleReminder = (id) => {
      setTasks(tasks.map((task) => task.id ===id
      ? {...task, reminder : !task.reminder } : task));
    }


  return (
    <div className='container'>
      <Header onAdd = {()=> setshowAddTask(!showAddTask)} showAddTask = {showAddTask}/>
      {showAddTask && <AddTask onAdd = {addTask}/>}
      {tasks.length>0 ? 
        <Tasks tasks = {tasks} onDelete = {deleteTask} onToggle = {toggleReminder}/> 
        : 'There are no tasks.'}
    </div>
  );
}

export default App;
