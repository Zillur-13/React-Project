import { useState } from "react"



const Home = () => {
 
  const [time, setTime] = useState("")
  const showTime = ()=>{
    const now = new Date()
    setTime(now)
  }

  return (
    <div>
      <div className="flex flex-col justify-center items-center h-[70vh] px-4" style={{
        backgroundImage: "url('src/assets/laptop.avif')",
        backgroundSize:'cover',
        backgroundPosition : 'center',
        backgroundRepeat : 'no-repeat'
      }}>
        <p className="text-white">{`Now Current Time : ${time}`}</p>
         <h1 className="style font-bold text-white text-2xl md:text-5xl py-5">well come to our page</h1>
         <h3 className="style font-bold text-white text-1xl md:text-3xl py-3">your Journey start Here</h3>
         <p className="style font-bold text-white text-1xl md:text-2xl py-3 text-red">Programming is very easy</p>
         <button onClick={showTime} className="rounded-md font-bold bg-green-800 mt-5 px-5 py-2 text-white">let's start</button>
       </div>
    </div>
  )
}

export default Home