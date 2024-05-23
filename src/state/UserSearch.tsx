import {useState} from "react";

interface User {
  name:string
  age: number
}

const users: User[] = [
  {name: 'Sarah', age: 20},
  {name: 'Alex', age: 30},
  {name: 'Michael', age: 40},
  {name: 'Jeff', age: 50},
]

export default function UserSearch() {
  const [name, setName] = useState<string>('')
  const [user, setUser] = useState<User | undefined>()

  const handleFindUser = () => {
    const foundUser =  users.find((user) => user.name === name)
    
    if(foundUser) {
      setUser(foundUser)
    }
  }
  
  return (
    <div>
      <div>UserSearch</div>
      
      <input value={name} onChange={e => setName(e.target.value)} />
      <button onClick={handleFindUser}>Find User</button>
      
      {/*Spacer*/}
      <div style={{height: '25px'}}/>
      
      <div>{user && user.name}</div>
      <div>{user && user.age}</div>
    </div>
  )
}
