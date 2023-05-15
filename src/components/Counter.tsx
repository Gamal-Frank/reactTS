type CounterProps ={
    state:number,
    add():void,
    substract():void
}
const Counter = (props:CounterProps) => {
    return ( <div>
<div className="bg-white">
    {props.state}
</div>
<button className="bg-white" onClick={props.add} >+</button>
<button className="bg-white" onClick={props.substract} >-</button>
    </div> );
}
 
export default Counter;<div>
</div>