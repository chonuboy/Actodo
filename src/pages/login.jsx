import { useState } from "react"
import { Link } from "react-router-dom"
import { useNavigate } from "react-router-dom"
function Login(props) {
    
    const user=props.user
    const navigate=useNavigate()
    
    var [valid,setvalid]=useState(true)
    var[uiname,setuiname]=useState()
    var [upword,setupword]=useState()
    function getuname(e){
        setuiname(e.target.value)
    }
    function getupword(e){
        setupword(e.target.value)
    }    
    function checkuser(){
        var login=false
        user.forEach(function(item){
            if(item.uname===uiname && item.pword===upword){
                console.log("login successful")
                login=true
                navigate("/landing",{state:{user:uiname}})
            }
        })
        if(login==false){
            console.log("Login Failed")
            setvalid(!setvalid)
            
        }
    }

    return (
        <div className='bg-black p-10'>
            <h1 className="text-3xl font-bold text-white text-center">Log In</h1>
            <div className='bg-white p-12 border rounded-md mt-2'>
                <div>
                    <h1 className='text-3xl font-bold'>Hey Hi!</h1>
                    {valid? <p>I Help You manage your activities after you login :)</p>: <p className="text-red-600">Please Signup Before Login!!!</p>}
                    <div className='flex flex-col gap-1 w-60'>
                        <input type="text" placeholder='username' className=' placeholder-purple-400 border border-black rounded-md p-2 my-2' onChange={getuname} />
                        <input type="password" placeholder='password' className='placeholder-purple-400 border border-black rounded-md p-2 my-2' onChange={getupword} />
                        <button onClick={checkuser} className='bg-purple-700 text-black w-20 border rounded-md p-1'>Log in</button>
                        <p>Don't Have an Account? Click Here to <span><Link className='underline font-bold' to={"/signup"}>Signup</Link></span></p>
                    </div>
                </div>
            </div>
        </div>

    )
}
export default Login
