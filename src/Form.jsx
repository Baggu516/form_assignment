import React,{useState} from 'react'

const Form = () => {
    const [name,setName]=useState("")
    const [email,setEmail]=useState("")
    const [password,setPassword]=useState("")
    const handleSubmit=(e)=>{
        e.preventDefault()
        console.log({name,email,password})
    }
  return (
    <div>
        <form onSubmit={handleSubmit}>
            <label htmlFor='name'>Name : </label>
            <input type="text" id="name" value={name} onChange={(e)=>setName(e.target.value)} /><br/>
            <label htmlFor='email'>Email : </label>
            <input type="text"  id="email" value={email} onChange={(e)=>setEmail(e.target.value)} /><br/>
            <label htmlFor='password'>Password : </label>
            <input type="text" id="password" value={password} onChange={(e)=>setPassword(e.target.value)} /><br/>
            <input type="submit" value="Submit" />
        </form>
    </div>
  )
}

export default Form