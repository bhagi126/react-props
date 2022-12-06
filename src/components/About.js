import {useState}from 'react'

function About(){
    const [village,setVillage]=useState("paris");
    const [country,setCountry]=useState("india")
	return(
         <div>
            <h1>{country}</h1>
            <p>{village}</p>
         	<p><input onChange={(e)=>setVillage(e.target.value)}/></p>
              <input onChange={(e)=>setCountry(e.target.value)}/>
             <p><button onClick={()=>console.log(village,country)}>Submit</button></p>
   
         </div>
		)
}

export default About