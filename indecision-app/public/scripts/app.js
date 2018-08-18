'use strict';

console.log('App.js is running!');

//JSX

var app = {
    title: 'Indecision App',
    subtitle: 'Some subtitle',
    options: []
};
var onFormSubmit = function onFormSubmit(e) {
    e.preventDefault();

    var option = e.target.elements.option.value;
    app.options.push(option);
    e.target.elements.option.value = null;
    console.log(app.options.length);
};

var onRemoveAll = function onRemoveAll() {
    app.options = [];
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
        app.options.length > 0 ? 'There are some options.' : 'No options lol'
    ),
    React.createElement(
        'form',
        { onSubmit: onFormSubmit },
        React.createElement('input', { type: 'text', name: 'option' }),
        React.createElement(
            'button',
            null,
            'Add option'
        ),
        React.createElement(
            'button',
            { onClick: onRemoveAll },
            'Remove All'
        ),
        React.createElement(
            'ol',
            null,
            app.options.map(function (option) {
                return React.createElement(
                    'p',
                    { key: option },
                    'Option: ',
                    option
                );
            })
        )
    )
);

var appRoot = document.getElementById('app');
ReactDOM.render(template, appRoot);
