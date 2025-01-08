export default function NewArrival(){
    return(
       <>
    <div className="font-[sans-serif] p-4--- mx-auto lg:max-w-5xl--- md:max-w-3xl--- max-w-lg---">
      <h2 className="text-4xl font-extrabold text-gray-800 mb-12">New Arrival</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-5 " >

          <div className='' style={{width:'570px', height:"600px"}}>
                <img src="img/banner3.png"  className="h-full"/>
          </div>

          <div className='' style={{width:'570px', height:"600px"}}>
              <div className=" mb-5 grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1" >
                <img src="img/banner4.png"  className="h-full"/>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-3 " >
                <img src="img/banner5.png"  className="h-full"/>
                <img src="img/banner6.png"  className="h-full"/>
              </div>
          </div>
      </div>

   
      
    </div>
      
       </>
    )
}