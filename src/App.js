import { useState } from "react";
import "./App.css";
import { Button } from "./components/Button";

function App() {
    const [count, setCount] = useState(0);
    const handleAdd = () => {
        setCount((prev) => prev + 5);
    };
    const handleReduce = () => {
        setCount((prev) => prev - 5);
    };

    return (
        <div className="App">
            <h2 data-testid="counter">Counter: {count}</h2>
            <Button func={handleAdd}>ADD</Button>
            <Button func={handleReduce}>REDUCE</Button>
        </div>
    );
}

export default App;
