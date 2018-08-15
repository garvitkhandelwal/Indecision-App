console.log('App.js is running!')

//JSX

var app = {
    title : 'Indecision App',
    subtitle : 'Some subtitle',
    options : ['Option 1', 'Option 2']
};

var template = (
    <div>
        <h1>{app.title}</h1>
        {app.subtitle && <p>{app.subtitle}</p>}
        <p>{app.options.length > 0 ? 'There are some options.' : 'No options'}</p>
    </div>
);
var appRoot = document.getElementById('app');

ReactDOM.render(template,appRoot);