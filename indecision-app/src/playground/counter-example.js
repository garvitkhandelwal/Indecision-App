const addOne = () => {
    count++;
    console.log('Add button pressed', count);
    templatethree();
};
const minusOne = () => {
    count--;
    console.log('Minus button pressed', count);
    templatethree();
};
const reset = () => {
    count = 0;
    console.log('Reset pressed', count);
    templatethree();
};

let count = 0;

var appRoot = document.getElementById('app');

const templatethree = () => {
    const templateTwo = (
    <div>
        <h1>Count: {count}</h1>
        <button onClick={addOne}>+1</button>
        <button onClick={minusOne}>-1</button>
        <button onClick={reset}>Reset</button>
    </div>
    );
    ReactDOM.render(templateTwo,appRoot);
};
templatethree();