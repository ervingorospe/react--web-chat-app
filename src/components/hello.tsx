import { Component } from "react"

interface HelloProps {
  
}
 
interface HelloState {
  count: number
}
 
class Hello extends Component<HelloProps, HelloState> {
  stateL: HelloState = { count: 0 }
  
  render() { 
    return (
      <h1 className="text-3xl font-bold underline">
        Hello world!
      </h1>
    );
  }
}
 
export default Hello;