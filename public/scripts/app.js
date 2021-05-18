'use strict';

var show = false;
var toggle = function toggle() {
    show = !show;
    render();
};
render();
function render() {
    var templateVisibility = React.createElement(
        'div',
        null,
        React.createElement(
            'h1',
            null,
            'Visibility Toggle'
        ),
        React.createElement(
            'button',
            { onClick: toggle },
            show ? 'hide details' : 'show details'
        ),
        show && React.createElement(
            'p',
            null,
            'These are the details.'
        )
    );
    ReactDOM.render(templateVisibility, document.getElementById('app'));
}
