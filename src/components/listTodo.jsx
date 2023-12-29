function Listtodo(props) {

    const arr=props.arr
    const setarr=props.setarr
    function delarr(id){
        var temp=arr.filter(function(item){
            if(item.id==id){
                return false
            }else{
                return true
            }
        })
        setarr(temp)
    }
    return (
        <div className=' bg-[#BDB4EA] flex-grow flex flex-col gap-2 flex-wrap border rounded-md p-5'>
            <h1 className='text-2xl font-bold'>Today's Activity</h1>
            {arr.length==0 ?<p>You have not added Anything</p> : ""}
            {
                arr.map(function (item) {
                    return (
                        <div className="flex justify-between">
                        
                        <p>{item.id}.{item.activity}</p>
                        <button className="text-red-600" onClick={()=>delarr(item.id)}>Delete</button>

                        </div>)
                })
            }

        </div>
    )
}
export default Listtodo