import { ReactNode } from "react";

interface ListProps<T>{
items:T[],
render:(items:T)=>ReactNode
}
const List = <T,>(props:ListProps<T>) => {
    return ( <div className="bg-white">
<ul>
   {props.items.map((item,i)=>(
    <li key={i}>{props.render(item)}</li>
   ))}
</ul>
    </div> );
}
 
export default List;