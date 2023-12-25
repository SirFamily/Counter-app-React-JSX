const root = ReactDOM.createRoot(document.getElementById('root'));
const audio = new Audio();
audio.src = "./pop.mp3";
function MyApp() {
    const [sum, setSum] = React.useState(0);

    const updateSum = (n) => {
        setSum(() => sum + n);
    };

    return (
        <div>
            <h1>Hello World!</h1>
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
                <button onClick={() => {
                    updateCounter(1);
                    audio.play();
                }}>+</button>
                <button>{count}</button>
                <button onClick={() => {updateCounter(-1); audio.play();}}>-</button>
                <button onClick={() => updateCounter(-count)}>C</button>
                <button>X</button>
            </div>
        </div>
    );
}

root.render(<MyApp />);
