import {useState} from "react";

const GuestList= () => {
  const [name, setName] = useState<string>('')
  const [guests, setGuests] = useState<string[]>([])
  
  const handleAddGuest = () => {
    setName('')
    
    setGuests([...guests, name] )
  }
  
  return (
    <div>
      <div>Guest List</div>
      
      <ul>
        {guests.map(guest => <li key={guest}>{guest}</li>)}
      </ul>
      
      <input value={name} onChange={(e) => setName(e.target.value)}/>
      <button onClick={handleAddGuest}>Add Guest</button>
    </div>
  )
}

export default GuestList