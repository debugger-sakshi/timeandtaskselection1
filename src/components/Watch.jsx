import React, { useRef, useState } from 'react'

const Watch = ({isTimer,setTimer,requestModalOpen}) => {
    let [hour,setHour] = useState(0);
    let [minutes,setMinutes] = useState(0);
    let [seconds,setSeconds] = useState(0);
    let [isStart,setisStart] = useState(true);
    let [isPause,setisPause] = useState(false);
    let [isSave,setisSave] = useState(false);


    const intervalRef = useRef();
    const displayTimer = () =>{
        intervalRef.current = setInterval(() =>{
            seconds += 1
            setSeconds((seconds) => seconds+1)

            if(seconds==60){
                seconds = 0
                minutes += 1
                setMinutes((minutes) => minutes+1)
                setSeconds(0)
                if(minutes===60){
                    minutes = 0
                    setHour((hour) => hour+1)
                }
            }
            
        },1000)
    }

    const onClickStartHandler = () =>{
        setisStart(false)
        setisPause(true)
        setisSave(true)
        displayTimer()
    }
    const onClickPauseHandler = ()=>{
        setisStart(true)
        setisPause(false)
        setisSave(true)
        clearInterval(intervalRef.current)
        intervalRef.current = null;
    }
    const saveHandler = ()=>{
        const val = `${hour}:${minutes}:${seconds}`
        setTimer(val)
        onClickPauseHandler()
        seconds = 0
        setSeconds(seconds)
        minutes = 0
        setMinutes(minutes)
        hour = 0
        setHour(hour)
        // console.log(hour,seconds,minutes)
        requestModalOpen(true)
        
    }
    if (!isTimer){
        console.log(isTimer)
        return null
    }
  return (
    
      <div className="watch">
         <h1>{hour < 10 ? '0' + hour: hour}:{minutes < 10 ? '0' + minutes: minutes}:{seconds < 10 ? '0' + seconds: seconds}</h1> 
        <section>
            <button onClick={onClickStartHandler} disabled={!isStart}>Start</button>
            <button onClick={onClickPauseHandler} disabled={!isPause}>Pause</button>
            <button onClick={saveHandler} disabled={!isSave}>Save</button>
        </section>
      </div>
    
  )
}

export default Watch
