import { useState } from 'react'
import './Todo.css'
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
function Todo() {

  const [value, setValue] = useState("")
  const [values, setValues] = useState([])
  const [editing, setEditing] = useState(false)
  const [completed, setCompleted] = useState([])

  function creatName(e) {
    setValue(e.target.value)
  }


  function submitForm(e) {
    e.preventDefault();
    if(editing !== false){
      values[editing]=value;
      setEditing(false);
    }
    else{
      setValues([...values,value]);
      setValue("");
    }
  }
  function handelDelete(e,index){
    e.preventDefault();
    setValues(values.filter((x,id)=>{
      return (id !== index)
    }))
  }
  function handleEdit(e,index){
    e.preventDefault();
    setValue(values[index]);
    setEditing(index)
  }
  function handleDone(e,index){
    e.preventDefault();
   setCompleted([...completed,index])
  }
 
  
  return ( 
    <>
      <form onSubmit={submitForm}>
        <input type="text" placeholder='enter your name' value={value} onChange={creatName}></input>
        <button type='submit'>Add Me</button>
      </form>
      <ul>
      {values.map((x,index) => {
            return (
             <li className={(completed.includes(index)) ? 'complete' : ''} key={index}>
              
              {x}
              <a className='anchor'  href="" onClick={(e)=>handelDelete(e,index)}>
              <DeleteIcon /></a>
              <a className='anchor' href="" onClick={(e)=> handleEdit(e,index)}>
              < EditIcon /></a>
              <a className='anchor' href="" onClick={(e)=> handleDone(e,index)}>
              <CheckCircleIcon />
              </a>
              
              </li>
              )
          })}
      </ul>
    </>
  )
}

export default Todo;
