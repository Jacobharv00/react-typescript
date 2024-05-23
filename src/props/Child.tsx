interface ChildProps {
  color: string  
}

export const Child = ({color}: ChildProps) => {
  return (
    <div>
      <div>{`Color is ${color}`}</div>
    </div>
  )
}