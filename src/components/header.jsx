import { useLocation } from "react-router-dom"
function Header() {
    
    const head=useLocation()
    
    return (
        <>
            <h1 className="text-3xl font-bold">Hello {head.state.user}!</h1>
            <p>I'm Here To Help Manage Activities :)</p>
        </>
    )
}
export default Header