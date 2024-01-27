import {FC, useEffect, useState} from "react";

const Counter: FC = () => {
    const [count, setCounter] = useState(0);
    const [message, setMessage] = useState("Hi there, how are you?");

    useEffect(() => {
        console.log("useEffect called");
        setTimeout(() => {
            setMessage("I'm fine, thanks for asking.")
        }, 2000)
    })

    return (
        <div>
            <button onClick={() => setCounter(count + 1)}> Increment by 1</button>
            &nbsp;&nbsp;
            <button onClick={() => setCounter(count - 1)}> Decrement by 1</button>
            <h2>{count}</h2>
            <h3>{message}</h3>
        </div>
    );
};

export default Counter;