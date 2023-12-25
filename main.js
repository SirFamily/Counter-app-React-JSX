const root = ReactDOM.createRoot(document.getElementById('root'));
const pop = new Audio();
pop.src = "./pop.mp3";
const del = new Audio();
del.src = "./del.mp3";
const boom = new Audio();
boom.src = "./boom.mp3";

function MyApp() {
    const [sum, setSum] = React.useState(0);

    const updateSum = (n) => {
        setSum(() => sum + n);
    };

    return (
        <div>
            <h1>Thiraphat Chonlathep</h1>
            <p>Sum = {sum}</p>
            <button onClick={() => alert('Coming soon...')}>ADD Counter</button>
            <div>
                <Counter updateSum={updateSum} />
            </div>
        </div>
    );
}

function Counter({ updateSum }) {
    const [count, setCount] = React.useState(0);

    const updateCounter = (n) => {
        if (count + n < 0) {
            return;
        }
        setCount(() => count + n);
        updateSum(n);
    };

    return (
        <div className="counter">
            <div className="controller">
                <button onClick={() => { updateCounter(1); pop.play(); }}>+</button>
                <button>{count}</button>
                <button onClick={() => { updateCounter(-1); pop.play(); }}>-</button>
                <button onClick={() => { updateCounter(-count); del.play(); }}>C</button>
                <button onClick={() => { boom.play(); alert('อย่าพึงลบเลยครับ มีอันเดียวเอง'); }}>X</button>
            </div>
        </div>
    );
}

root.render(<MyApp />);
