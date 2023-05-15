import Counter from "./components/Counter";
import Heading from "./components/Heading";
import List from "./components/List";
import Section from "./components/Section";
import { useState } from "react";

function App() {
  const [count, setCount] = useState(1);

  function add(): void {
    setCount(count + 1);
  }
  function substract(): void {
    setCount(count - 1);
  }

  return (
    <div className="bg-black h-[100vh]">
      <Heading title={"frank"} />
      <Section title={"ANOTHER TITLE"}>this is my section</Section>
      <Counter state={count} add={add} substract={substract} />
      <List items={["coffee","tea","orange"]} render={(item:string)=> <span>{item}</span>}/>
    </div>
  );
}

export default App;
