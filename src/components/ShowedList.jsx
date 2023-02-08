import React from 'react'

const ShowedList = ({isShowed,list,requestModalOpen,editHandler}) => {
  console.log(isShowed,list)
  const editButtonHandler = ()=>{
    requestModalOpen(true)
    editHandler(true)
    
  
  }
  if(!isShowed){
    return null
  }
  return (
    <div className='showed'>
      {
        list.map((item,i) => {
            return(
                <div  key={item.title}>
                  <div>
                    <h2>{item.title}</h2>
                    <p>{item.description}</p>
                  </div>
                  <div>
                    <h4>Time: {item.time}</h4>
                    <button onClick={editButtonHandler}>Edit</button>
                  </div>
                </div>
            )
        })
      }
    </div>
  )
}

export default ShowedList
