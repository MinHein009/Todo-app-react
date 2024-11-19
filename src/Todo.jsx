import React, {useState} from "react"
import './index.css'

function Todo(){
    const [task,setTask] = useState([]);
    const [input,setInput] = useState('');
    const [edit,setEdit] = useState(null);

    const handleInputChange = (e) =>{
        setInput(e.target.value);
    }

    const addTask = () => {
        if(input.trim() !== ""){
            setTask((t) => [...t,input]);
            setInput('');
        }
        else{
            console.log("We don't do anything")
        }
    }

    const delteTask = (e) => {
      const update =  task.filter((_,i) => i !== e);
      setTask(update);
        console.log("hi");
    }

    const editTask = (e) =>{
        setEdit(e);
        setInput(task[e]);
        console.log("editing");
    }

    const editSave = () =>{
        if(input.trim() !== ''){
            const updateTask = [...task];
            updateTask[edit] = input;
            setTask(updateTask);
            setEdit(null);
            setInput('');
            console.log("saved");
        }
    }

    return(
        <>
       <div className="p-5">
       <input className="shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" value={input} onChange={handleInputChange} placeholder="Enter the task"/>
        {edit === null ?(
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ml-2" type="submit" onClick={addTask}>Add</button>):
        (<button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ml-2" onClick={editSave}>Save</button>)}
        <ol>
            {task.map((i,e) => 
            <li className="mt-4" key={e}>
            <spam className="shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">{i +' '}</spam>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ml-2" onClick={() => delteTask(e)}>Delete</button>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ml-2" onClick={() => editTask(e)}>Edit</button>
            </li>)}
        </ol>
       </div>
        </>
    );
}

export default Todo