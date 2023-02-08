import './App.css';
import Watch from './components/Watch';
import Modal from './components/Modal';
import { useState } from 'react';
import ShowedList from './components/ShowedList';
function App() {
  const [isTimer,setIsTimer] = useState(false);
  const [isEditable,setIsEditable] = useState(false);
  let [list,setList] = useState([]);
  const [isShowed,setIsShowed] = useState(false);
  const [isModalOpen,setIsModalOpen] = useState(false);
  
  const [TimerValue,setTimerValue] = useState('')
  
  const requestModalOpen = (val)=>{
    
    setIsModalOpen(val)
    console.log(isTimer,isModalOpen)
  }
  
  const editHandler = (val)=>{
    setIsEditable(val)
    setIsShowed(false)
  }
    const addList = (obj) =>{
      console.log(obj)
      list.push({...obj,time:TimerValue})
      setList(obj => ([...list]))
      console.log(list)
    }
    const editList = (obj,ind) =>{
      const l = list.map((val)=> {
        if(val.title===obj.title){
          console.log(val,obj)
          return {...val,description:obj.description}
        }else return val
      })
      setList(obj => (l))
    }
    const setTimer = (value)=>{
      console.log(value)
      setTimerValue(value)
      setIsEditable(false)
      
      // selectTask()
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
      // selectTimer()
    }

    const showedListHandler = ()=>{
      setIsShowed(true)
      setIsTimer(false);
      console.log("isShowed",isShowed,list,isTimer)
     
    }
    const setTimerHandler = ()=>{
      setIsTimer(true)
      setIsShowed(false)
    }
  return (
    <div className="app">
      <div className='header'>
      <button onClick={setTimerHandler} >Timer</button>
      
      <button onClick={showedListHandler}>Showed List</button>
      </div>
      <Watch isTimer={isTimer} setTimer={setTimer} requestModalOpen={requestModalOpen} />
    
      <Modal isModalOpen={isModalOpen} requestModalOpen={requestModalOpen} addList={addList} editList={editList} isEditable={isEditable} editHandler={editHandler}/>
    
      <ShowedList isShowed={isShowed} list={list} requestModalOpen={requestModalOpen} editHandler={editHandler}  />
   
    </div>
  );
}

export default App;
