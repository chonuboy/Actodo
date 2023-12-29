import { useState } from "react"
import Addtodo from "./addtodo"
import Listtodo from "./listTodo"
function Todocontainer() {

    var [arr,setarr]=useState([])


    return (
        <>
            <div className='flex gap-10 flex-wrap'>
                <Addtodo arr={arr} setarr={setarr}/>
                <Listtodo id={arr.id} arr={arr} setarr={setarr} />
            </div>

        </>
    )
}
export default Todocontainer