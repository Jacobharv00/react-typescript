import {Child} from './Child'

export default function Parent() {
  return (
    <Child color="blue" onClick={() => console.log('Clicked!')}>
      <div>DIV CHILD</div>
    </Child>
  )
}