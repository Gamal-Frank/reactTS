import { ReactNode } from "react";

type SectionProps ={
    title?:string,
    children:ReactNode
}
const Section = ({children,title="Title Of The Section"}:SectionProps) => {
    return ( <div>
<div className="text-white">{title}</div>
<div className="text-white">{children}</div>
    </div> );
}
 
export default Section
