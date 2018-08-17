console.log('App.js is running!')

//JSX

var app = {
    title : 'Indecision App',
    subtitle : 'Some subtitle',
    options : ['Option 1', 'Option 2']
};

const onFormSubmit = (e) => {
    e.preventDefault();
    
    const option = e.target.elements.option.value;
    app.options.push(option);
    e.target.elements.option.value = null;
    console.log(app.options);
};

var template = (
    <div>
        <h1>{app.title}</h1>
        {app.subtitle && <p>{app.subtitle}</p>}
        <p>{app.options.length > 0 ? 'There are some options.' : 'No options'}</p>
        <form onSubmit={onFormSubmit}>
            <input type='text' name='option'/>
            <button>Add option</button>
        </form>
    </div>
);

var appRoot = document.getElementById('app');
ReactDOM.render(template,appRoot);
