function Card(props){
    return(
        <>
            <div style={{backgroundColor:props.color}} className='px-10 py-5 text-center flex-grow border rounded-md'> 
                    <h1 className='font-md text-2xl'>{props.head}</h1>
                    <p>{props.para}</p>
              </div>
        </>
    )

}
export default Card