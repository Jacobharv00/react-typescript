export default function EventComponent() {
  
  const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log('event ->', event)
  }
  
  const handleDrag = (event: React.DragEventHandler<HTMLDivElement>) => {
    console.log('Im being Dragged', event)
  }
  
  return (
    <div>
      <div>EventComponent</div>
      
      <input onChange={handleOnChange}/>
      
      {/*@ts-ignore*/}
      <div draggable onDragStart={handleDrag}>Drag me</div>
    </div>
  )
}

