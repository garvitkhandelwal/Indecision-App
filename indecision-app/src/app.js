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
    app.options.push(option);
    e.target.elements.option.value = null;
    console.log(app.options.length);
};

const onRemoveAll = () => {
    app.options = [];
    console.log(app.options);
};
 
var template = (
    <div>
        <h1>{app.title}</h1>
        {app.subtitle && <p>{app.subtitle}</p>}
        <p>{app.options.length > 0 ? 'There are some options.' : 'No options lol'}</p>
        <form onSubmit={onFormSubmit}>
            <input type='text' name='option'/>
            <button>Add option</button>
            <button onClick={onRemoveAll}>Remove All</button>
        <ol>
            {
                app.options.map((option) => {
    return <p key={option}>Option: {option}</p>
})
            }
        </ol>
        </form>
    </div>
);

var appRoot = document.getElementById('app');
ReactDOM.render(template,appRoot);
