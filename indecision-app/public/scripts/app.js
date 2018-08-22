'use strict';

var appRoot = document.getElementById('app');
var visibility = false;
var onButtonClick = function onButtonClick() {
    visibility = !visibility;
    if (visibility === true) {
        React.createElement(
            'p',
            null,
            '\'These are some of the details.\''
        );
    }
    render();
};

var render = function render() {
    var template = React.createElement(
        'div',
        null,
        React.createElement(
            'h1',
            null,
            'Visibility Toggle'
        ),
        React.createElement(
            'button',
            { onClick: onButtonClick },
            visibility === false ? 'Show Details' : 'Hide Details'
        ),
        visibility && React.createElement(
            'div',
            null,
            React.createElement(
                'p',
                null,
                'These are some of the details.'
            )
        )
    );
    ReactDOM.render(template, appRoot);
};
render();
