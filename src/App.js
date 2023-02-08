import './App.css';
import Watch from './components/Watch';
import Modal from './components/Modal';
import { useState } from 'react';
import ShowedList from './components/ShowedList';
function App() {
  const [isTimer,setIsTimer] = useState(true);
  const [isTask,setIsTask] = useState(false);
  let [list,setList] = useState([]);
  const [isShowed,setIsShowed] = useState(false);
  
  const [TimerValue,setTimerValue] = useState('')
  

    const selectTimer = ()=>{
        setIsTimer(true);
        setIsTask(false);
        setIsShowed(false)

    }
    const selectTask = ()=>{
        setIsTimer(false);
        setIsShowed(false)
        setIsTask(true);


    }
    const setTimer = (value)=>{
      console.log(value)
      setTimerValue(value)
      selectTask()
    }
    const setModal = ({title,description})=>{
      let obj = {
        title:title,
        description:description,
        time:TimerValue
      }
      list.push(obj)
      setList(list => list)
      console.log(list)
      selectTimer()
    }
    const cancelModal = ()=>{
      selectTimer()
    }
    const showedListHandler = ()=>{
      setIsShowed(true)
      setIsTimer(false);
      setIsTask(false);
    }
  return (
    <div className="app">
      <div className='header'>
      <button onClick={selectTimer} >Timer</button>
      
      <button onClick={showedListHandler}>Showed List</button>
      </div>
      {
        isTimer?<Watch setTimer={setTimer} />:''
      }
    {
        isTask?<Modal setModal={setModal} cancelModal= {cancelModal} />:''
      }
      {
        isShowed?<ShowedList list={list} />:''
      }
    </div>
  );
}

export default App;
