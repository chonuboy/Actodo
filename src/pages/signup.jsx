import { useState } from "react"
import { Link } from "react-router-dom"
import { useNavigate } from "react-router-dom"
function Signup(props) {
    
    const user=props.user
    const setuser=props.setuser
    var navigate=useNavigate()
    var [validpw,setvalidpw]=useState(true)
    var [newname,setnewname]=useState()
    var [newpw,setnewpw]=useState()
    var[conpw,setconpw]=useState()

    function getuname(e){
        setnewname(e.target.value)
    }
    function getupword(e){
        setnewpw(e.target.value)
    }
    function getconpw(e){
        setconpw(e.target.value)
    }

    function adduser(){
        if(newpw===conpw){
            setuser([...user,{uname:newname,pword:newpw}])
            navigate("/") 
        }else{
            setvalidpw(false)
        }
    }
    console.log(user);    
    return (
        <div className='bg-black p-10'>
            <div className='bg-white p-10 border rounded-md'>
                <div>
                    <h1 className='text-3xl font-bold'>Welcome New User !</h1>
                    <p>Sign Up Here :)</p>
                    <div className='flex flex-col gap-1 w-60'>
                        <input type="text" placeholder='username' className='placeholder-orange-200 border border-black rounded-md p-2 my-2'onChange={getuname}/>
                        <input type="password" placeholder='password' className='placeholder-orange-200 border border-black rounded-md p-2 my-2' onChange={getupword} />
                        <input type="password" placeholder='confirm password' className='placeholder-orange-200 border border-black rounded-md p-2 my-2' onChange={getconpw} />
                        {validpw ? "":<p className="text-orange-400">Please Enter Correct Password</p>}
                        <button className='bg-orange-500 text-black w-20 border rounded-md p-1' onClick={adduser}>Sign Up</button>
                        <p>Already Have an Account? <span><Link className='underline font-bold' to={"/"}>Login</Link></span></p>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Signup