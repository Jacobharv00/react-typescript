interface ChildProps {
  color: string;
  onClick: () => void;
  children?: React.ReactNode;
}

export const Child = ({color, onClick, children}: ChildProps) => {
  return (
    <div>
      <div>{`Color is ${color}`}</div>
      
      {children}
      
      <button onClick={onClick}>Click Me</button>
    </div>
  )
}