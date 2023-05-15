type HeadingProps = {title:string}
const Heading = ({title}:HeadingProps) => {
    return (
        <div className="text-white font-bold">{title}</div>
      );
}
 
export default Heading;