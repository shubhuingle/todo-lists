import React, { useState } from 'react';
import "./App.css";

function App() {
  const[task,setTask]=useState([]);
  const[completed,setCompleted]=useState([]);
  const[text,setText]=useState();
  const[cb,setCb]=useState(false);

 const deleteTask=(place)=>{
    task.splice(place,1)
    setTask([...task])
  }

  const CompletedTask=(place)=>{
   setTimeout(() => {
    let t=task.splice(place,1)
   setCompleted([...completed,t])
   setTask([...task])
   setCb(false)
   }, 250);
  }
  return (
    <>
    <div className="Container">
      <div>
      <h1 id="heading">To Do App ..</h1>
      </div>
       
        <div className='child1'>
          <input type="text" id='inp-box' value={text} onChange={(event)=>setText(event.target.value)} autoFocus placeholder='Enter the Tasks'/>
          <button id='btn' onClick={()=>{
            let t=text.trim()
            if(t === ''){
              alert("Cannot add empty task.")
            }
            else{
              setTask([...task,t])
            }
             setText("")} } type=''>Add Task</button>
        </div>
        <div className='child2'>
          <div className='ongoing'>
            <h1>On Going Task</h1>
            {task.map((item,index)=>
              <div className='rendered-task'>
                <input type="checkbox" id={index} onChange={()=>CompletedTask(index)} checked={cb}/>
                <li key={index}>{item}</li>
                <img src="./edit.png" alt="img not available" width={30} onClick={()=>{
                  let edited_value=prompt("Edit the text "+item)
                  task.splice(index,1,edited_value)
                  setTask([...task])
                  }}/>
                <img id={index} src="./bin.png" alt="img not available" width={30} onClick={()=>deleteTask(index)}/>
              </div>
            )}
          </div>
          <div className='completed'>
            <h1 >Completed Task</h1>
            {completed.map((item)=><li key={index}>{item}</li>)}
          </div>
        </div>
    </div>
    </>
  )
}

export default App