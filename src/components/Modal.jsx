import React, { useRef, useState } from 'react'

const Modal = ({isModalOpen,requestModalOpen,addList,editList,isEditable,editHandler}) => {
    const [title,setTitle] = useState('');
    const [description,setDescription] = useState('');
    // const [titleRef,setTitleRef] = useRef('')
   
    const saveHandler = (e)=>{
        // e.preventDefault();
        // setModal({title,description})
        
        if(isEditable){
          setTitle(title)
          setDescription(description)
          
          editList({title,description})
      }
        else{
        editHandler(false)
        addList({title,description})
          // setTitle('')
          // setDescription('')

        }
        requestModalOpen(false)
        
    }
    const cancelHandler = ()=>{
        // cancelModal()
        requestModalOpen(false)
    }
    if (!isModalOpen){
      return null
    }
  return (
 
      <div className='modal' >
        
        <div className='box1'>
          <input type="text" placeholder='Title' value={title} onChange={(e)=>setTitle(e.target.value)} disabled={isEditable}/>
          <input type="text" placeholder='Description' value={description} onChange={(e)=>setDescription(e.target.value)} />
        </div>
        <div className='box2'>
          <button onClick={cancelHandler}>Cancel</button>
          <button onClick={saveHandler} >Save</button>
        </div>
        
      </div>
    
  )
}

export default Modal
