import React, { useState } from 'react'

const Modal = ({setModal,cancelModal}) => {
    const [list,setList] = useState({});
    const [title,setTitle] = useState('');
    const [description,setDescription] = useState('');

    const saveHandler = (e)=>{
        e.preventDefault();
        setModal({title,description})
    }
    const cancelHandler = ()=>{
        cancelModal()
    }
  return (
    <div className='modal' >
      <div className='box1'>
        <input type="text" placeholder='Title' value={title} onChange={(e)=>setTitle(e.target.value)}/>
        <input type="text" placeholder='Description' value={description} onChange={(e)=>setDescription(e.target.value)} />
      </div>
      <div className='box2'>
        <button onClick={cancelHandler}>Cancel</button>
        <button onClick={saveHandler}>Save</button>
      </div>
    </div>
  )
}

export default Modal
