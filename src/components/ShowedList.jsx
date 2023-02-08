import React from 'react'

const ShowedList = ({list}) => {
  return (
    <div className='showed'>
      {
        list.map((item) => {
            return(
                <div  key={item.title}>
                <h2>{item.title}</h2>
                <h2>{item.time}</h2>
                </div>
            )
        })
      }
    </div>
  )
}

export default ShowedList
