import Header from "../components/header"
import Card from "../components/cards"
import Todocontainer from "../components/todocontainer"
function Landing() {
    const date=new Date()
    const fulldate=`${date.getDate()}-${date.getMonth()+1}-${date.getFullYear()}`
    const fulltime=`${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`
    var deg=<sup>o</sup>
    return (
        <>
            <div className='bg-black py-5 md:p-10'>
                <div className='bg-white p-6 m-10 border rounded-md'>
                    <Header />
                    <div className='flex justify-between gap-7 m-5 flex-wrap'>
                        <Card color={"#8272DA"} head={"23"} para={"Chennai"} />
                        <Card color={"#FD6663"} head={fulldate} para={fulltime} />
                        <Card color={"#FD6201"} head={"Built Using"} para={"React"} />
                    </div>
                    <Todocontainer />
                </div>
            </div>
        </>
    )
}
export default Landing
