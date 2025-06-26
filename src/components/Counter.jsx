import { useEffect, useState } from "react";
const Counter = () => {
    const [count1, setCount1] = useState(0);
    const [count2, setCount2] = useState(0);
    const handleCount1 = () => {
        setCount1(count1 + 1);
    }
    const handleCount2 = () => {
        setCount2(count2 + 1);
    }
    useEffect(() => 
        {
            console.log("effect")
        },[count1,count2]
    )
    console.log("rendering....")
    return (
        <div>
            <h2>Counter</h2>
            <h3>Count1:{count1}</h3>
            <h3>Count2:{count2}</h3>
            <button className="btn1" onClick={handleCount1}>Increment1</button>
            <button className="btn1" onClick={handleCount2}>Increment2</button>
        </div>
    )
}
export default Counter;