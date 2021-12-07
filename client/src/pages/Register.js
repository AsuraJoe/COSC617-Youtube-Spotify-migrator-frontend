import './.App.css'

import {useState} from 'react'

function App() {
  const[name, setName]= useState('')
  const[email, setEmail]= useState('')
  const[password, setPassword] = useState('')
  //const[description]= useState('')
  //async function loginUser(event){
    //window.location.href = '/login'
  //}

  async function registerUser(event){
    event.preventDefault()
    const response= await fetch('http://localhost:1339/api/register', {
      method: 'POST', 
      headers:{
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name,
        email,
        password,
        //description
      }),
    })
    const data = await response.json()
    if (data.status === 'ok') {
      alert("success")
			
		}else
    alert("Email is already taken")
    
  }
  return <div>
    
    <h2> Please Register for Account </h2>
    <form onSubmit= {registerUser}>
      <input
      value={name}
      onChange={(e) => setName(e.target.value)}
      type="text"
      placeholder="Name"
      />
      <br />
       <input
      value={email}
      onChange={(e) => setEmail(e.target.value)}
      type="email"
      placeholder="Email"
      />
      <br />
       <input
      value={password}
      onChange={(e) => setPassword(e.target.value)}
      type="password"
      placeholder="Password"
      />
      
      <input type="submit" value="Register" />
    </form>
   
    </div>
 
}

export default App;
