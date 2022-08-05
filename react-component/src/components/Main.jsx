import { useState } from "react";


function Main(){
    const [count, setCount]= useState(0);
    const handleClick = () => setCount(count +1);
    return (
        <main>
            <h2>Main section here...</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae placeat eum ipsum vitae beatae error tempora laudantium quidem rem adipisci enim ut porro cumque, reprehenderit facere, repudiandae illum eveniet provident?</p>
            <h3>Counter: {count}</h3>
            <button onClick={handleClick}>
                Click Me!
            </button>
        </main>
    )
}

export default Main;