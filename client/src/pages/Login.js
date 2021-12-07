import './.App.css'
import {useState} from 'react'

function App() {
  
  const[email, setEmail]= useState('')
  const[password, setPassword] = useState('')
 
  //async function registerUser(event){
 //   window.location.href = '/register'
  //}
  async function loginUser(event){
    event.preventDefault()
    const response= await fetch('http://localhost:1339/api/login', {
      method: 'POST', 
      headers:{
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email,
        password
      }),
    })
    const data = await response.json()
    if(data.user){
      alert('Login successful')
      window.location.href = '/home'
    }else{
      alert('Incorrect email or password')
    }

  }


  return <div>
    
    <h2> Please Sign In </h2>
    <form onSubmit= {loginUser}>
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
      <input type="submit" value="Login!" />
    </form>
   
    </div>
 
}

export default App;
