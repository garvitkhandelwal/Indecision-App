console.log('App.js is running!')

//JSX

var app = {
    title : 'Indecision App',
    subtitle : 'Some subtitle',
    options : []
}
const onFormSubmit = (e) => {
    e.preventDefault();
    
    const option = e.target.elements.option.value;
    if(option)
        {
            app.options.push(option);
            e.target.elements.option.value = '';
            render();
        }
};

const onRemoveAll = () => {
    app.options = [];
    render();
};
const makeDecision = () => {
    const randomNum = Math.floor(Math.random() * app.options.length);
    const option = app.options[randomNum];
    alert(option);
};

var appRoot = document.getElementById('app');

const render = () => {
var template = (
    <div>
        <h1>{app.title}</h1>
        {app.subtitle && <p>{app.subtitle}</p>}
        <p>{app.options.length>0 ? 'There are some options' : 'No options LOL'}</p>
        <button disabled={app.options.length>0 ? false : true} onClick={makeDecision}>What should I do?</button>
        <button onClick={onRemoveAll}>Remove All</button>
        <form onSubmit={onFormSubmit}>
            <input type='text' name='option'/>
            <button>Add option</button>
        {
        app.options.map((option) => {
        return <li key={option}>{option}</li>
})
        
    }
        </form>
    </div>
);
ReactDOM.render(template,appRoot);
};

render();