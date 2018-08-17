'use strict';

console.log('App.js is running!');

//JSX

var app = {
    title: 'Indecision App',
    subtitle: 'Some subtitle',
    options: ['Option 1', 'Option 2']
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
    )
);

var appRoot = document.getElementById('app');
