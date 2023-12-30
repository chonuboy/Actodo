import { useState } from "react"

function Addtodo(props) {
    
    const arr=props.arr
    const setarr=props.setarr

    var [task,settask]=useState("")

    function gettask(e){
        settask(e.target.value)
    }
    function addtask(){
        setarr([...arr,{id:arr.length+1,activity:task}])
        settask("")
    }

    return (
            <div className='flex flex-col gap-2'>
                
                <h1 className='text-2xl font-medium'>Manage Activities</h1>

                <div className='flex gap-1 md:gap-2'>
                    <input placeholder='New Task' type="text" className='border border-black bg-transparent p-1' value={task} onChange={gettask} />
                    <button className='bg-black text-white p-1' onClick={addtask}>Add</button>
                </div>
            
            </div>
    )
}
export default Addtodo
