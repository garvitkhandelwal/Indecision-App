var appRoot = document.getElementById('app');
let visibility = false;
const onButtonClick = () => {
    visibility = !visibility;
    render();
};

const render = () => {
    var template = (
        <div>
            <h1>Visibility Toggle</h1>
            <button onClick={onButtonClick}>
            {visibility === false ? 'Show Details' : 'Hide Details'}
        </button>
        {visibility && (
        <div>
            <p>These are some of the details.</p>
        </div>
    )}
        </div>
    );
    ReactDOM.render(template,appRoot);
};
render();