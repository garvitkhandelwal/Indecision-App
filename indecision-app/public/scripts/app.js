'use strict';

console.log('App.js is running!');

//JSX

var app = {
    title: 'Indecision App',
    subtitle: 'Some subtitle',
    options: ['Option 1', 'Option 2']
};

var onFormSubmit = function onFormSubmit(e) {
    e.preventDefault();

    var option = e.target.elements.option.value;
    app.options.push(option);
    e.target.elements.option.value = null;
    console.log(app.options);
};

var template = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        app.title
    ),
    app.subtitle && React.createElement(
        'p',
        null,
        app.subtitle
    ),
    React.createElement(
        'p',
        null,
        app.options.length > 0 ? 'There are some options.' : 'No options'
    ),
    React.createElement(
        'form',
        { onSubmit: onFormSubmit },
        React.createElement('input', { type: 'text', name: 'option' }),
        React.createElement(
            'button',
            null,
            'Add option'
        )
    )
);

var appRoot = document.getElementById('app');
ReactDOM.render(template, appRoot);
