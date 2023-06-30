import React,{useState} from 'react'
import { Link } from 'react-router-dom'
function Register() {
  const form_div = 'h-screen flex flex-col justify-center items-center'
  const form_des = 'flex flex-col justify-center items-center h-96 reg-width m-auto '
  const text_des = 'border p-1 w-3/4 my-2'
  const submit_des = 'border-2 p-1 w-3/4 my-2 hover:cursor-pointer hover:bg-gray-400'
  const link_des = 'text-sm my-2 text-blue-600'
  const [email,setEmail] = useState()
  const [password,setPassword] = useState()
  const [fname,setFname] = useState()
  const [lname,setLname] = useState()
  const [conPassword,setConpassword] = useState()
  const [isDisable,setDisable] = useState(true)
  const handleEmail = (e) =>{
    setEmail(e.target.value)
  }
  const handlePassword = (e) =>{
    setPassword(e.target.value)
  }
  const handleFname = (e) =>{
    setFname(e.target.value)
  }
  const handleLname = (e) =>{
    setLname(e.target.value)
  }
  const handleConPassword = (e) =>{
    setConpassword(e.target.value)
  }
  return (
    <>
      <div className={form_div}>
        <form action='' className={form_des}>
          <h2 className="text-4xl mb-6">Register</h2>
          <div className="flex flex-row justify-between w-3/4">
            <input type="text" onChange={handleFname} className="w-2/4 border p-1 width-name my-2"  id="" value={fname} placeholder='first name'/>
            <input type="text" onChange={handleLname} className="w-2/4 border p-1 width-name my-2" id="" value={lname} placeholder='last name'/>
          </div>
          <input type="email" onChange={handleEmail} id="" placeholder='Email' value={email} className={text_des} />
          <input type="password"  onChange={handlePassword} placeholder='Password' value={password} className={text_des}/>
          <input type="password"  onChange={handleConPassword} placeholder='Confirm Password' value={conPassword} className={text_des}/>
          <input type="submit" value="Log In" disabled = {isDisable} className={submit_des} />
          <Link to='/login' className={link_des}>Already have a Account</Link>
          
        </form>

      </div>
    </>
  )
}

export default Register